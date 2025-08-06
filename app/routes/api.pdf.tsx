import { renderToStream } from "@react-pdf/renderer";
import { ActionFunction } from "@remix-run/node";
import ChallanPDFDocument from "~/component/ChallanPDFDcoument";
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
        const type = url.searchParams.get("type") || "quotation";

        if (save === "true") {
            if (type === "quotation")
                await insertOrUpdateOnetoDb(data);
            else
                await insertOrUpdateOnetoDb(data, "unnamed", "challans");

            await insertOnetoDb({ "by": data.madeby, "action": `${type} pdf creation`, "result": "succeded", "when": new Date().toISOString() }, "unnamed", "logs");
        }

        let stream;
        if (type === "quotation")
            stream = await renderToStream(PDFDocument({ ...data }, showCustomerList === "false" ? false : true));
        else
            stream = await renderToStream(ChallanPDFDocument({ ...data }));

        // and transform it to a Buffer to send in the Response
        let body: Buffer = await new Promise((resolve, reject) => {
            let buffers: Uint8Array[] = [];
            stream.on("data", (data) => { buffers.push(data); });
            stream.on("end", () => { resolve(Buffer.concat(buffers)); });
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