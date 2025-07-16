import { renderToStream } from "@react-pdf/renderer";
import { ActionFunction, LoaderFunction } from "@remix-run/node";
import PDFDocument from "~/component/PDFDcoument";
import { insertOnetoDb, insertOrUpdateOnetoDb } from "~/modules/dbOnline";
import { verifyAccessToken } from "~/modules/utils";

//export let loader: LoaderFunction = async ({ request, params }) => {
export const action: ActionFunction = async ({ request, params }) => {
    try {
        await verifyAccessToken(request);
        const data = await request.json();

        const url = new URL(request.url);
        const save = url.searchParams.get("save") || "true";
        const showCustomerList = url.searchParams.get("showCustomerList");

        if (save === "true") {
            await insertOrUpdateOnetoDb(data);
            await insertOnetoDb({ "by": data.madeby, "action": "pdf creation", "result": "succeded", "when": new Date().toISOString() }, "unnamed", "logs");
        }


        //console.log("PDF loader called", request, params, data);
        // Fetch the data you need for the PDF

        // render the PDF as a stream so you do it async
        //additionalInfo={data.additionalInfo} date={data.date} discount={data.discount} from={data.from} fromAddress={data.fromAddress} intro={data.intro} items={data.items} no={data.no} tax={data.tax} terms={data.terms} to={data.to} toAddress={data.toAddress} 

        let stream = await renderToStream(PDFDocument({ ...data }, showCustomerList === "false" ? false : true));

        // and transform it to a Buffer to send in the Response
        let body: Buffer = await new Promise((resolve, reject) => {
            let buffers: Uint8Array[] = [];
            stream.on("data", (data) => {
                buffers.push(data);
            });
            stream.on("end", () => {
                resolve(Buffer.concat(buffers));
            });
            stream.on("error", reject);
        });

        // finally create the Response with the correct Content-Type header for a PDF
        let headers = new Headers({ "Content-Type": "application/pdf" });
        return new Response(body, { status: 200, headers });
    }
    catch (error) {
        console.error("error while creating pdf : ", error);
        throw new Response("Internal server error", { status: 500 });
    }
};