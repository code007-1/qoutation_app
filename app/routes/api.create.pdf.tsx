import { renderToStream } from "@react-pdf/renderer";
import { ActionFunction } from "@remix-run/node";
import ChallanPDFDocument from "~/component/PDF/ChallanPDFDcoument";
import QuotationPDFDocument from "~/component/PDF/QuotationPDFDcoument";
//import { SaveOrUpdate } from "~/modules/dbOffline";
import { insertOnetoDb, insertOrUpdateOnetoDb } from "~/modules/dbOnline";
import { challanCollectionName, dbName, logsCollectionName, fullQuotationCollectionName, verifyAccessToken } from "~/modules/utils";

export const action: ActionFunction = async ({ request, params }) => {
    try {
        const { permissions } = await verifyAccessToken(request);
        if (!permissions?.includes("write"))
            return new Response("user not authorized to create", { status: 405 });

        const data = await request.json();

        const url = new URL(request.url);
        const save = url.searchParams.get("save") || "true";
        const showCustomerList = url.searchParams.get("showCustomerList");
        const type = url.searchParams.get("type") || fullQuotationCollectionName;

        if (save === "true") {
            if (type === fullQuotationCollectionName)
                await insertOrUpdateOnetoDb(data, dbName, fullQuotationCollectionName, { "no": data.no }, true);
            else if (type === challanCollectionName)
                await insertOrUpdateOnetoDb(data, dbName, challanCollectionName, { "no": data.no }, true);
            else {
                console.error("unknown data type while saving to db");
                throw new Response("Internal server error", { status: 500 });
            }
            await insertOnetoDb({ "by": data.madeby, "action": `${type} pdf creation`, "result": "succeded", "when": new Date().toISOString() }, dbName, logsCollectionName);
        }

        let stream;
        if (type === fullQuotationCollectionName)
            stream = await renderToStream(QuotationPDFDocument({ ...data }, showCustomerList === "false" ? false : true));
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
        return new Response(new Uint8Array(body), { status: 200, headers });
    }
    catch (error) {
        console.error("error while creating pdf : ", error);
        throw new Response("Internal server error", { status: 500 });
    }
};