import { ActionFunction } from "@remix-run/node";
import { insertOnetoDb, insertOrUpdateOnetoDb } from "~/modules/dbOnline";
import { dbName, logsCollectionName, verifyAccessToken, shortQuotationCollectionName } from "~/modules/utils";

export const action: ActionFunction = async ({ request, params }) => {
    try {
        const { permissions } = await verifyAccessToken(request);
        if (!permissions?.includes("write"))
            return new Response("user not authorized to create", { status: 405 });

        const { additionalInfo, bankInfo, fromAddress, intro, terms, toAddress, ...data } = await request.json();

        await insertOrUpdateOnetoDb(data, dbName, shortQuotationCollectionName, { "no": data.no }, true);
        await insertOnetoDb({ "by": data.madeby, "action": `Short quotation creation`, "result": "succeded", "when": new Date().toISOString() }, dbName, logsCollectionName);

        // finally create the Response with the correct Content-Type header for a PDF
        let headers = new Headers({ "Content-Type": "application/text" });
        return new Response("Quotation saved sucessfull", { status: 200, headers });
    }
    catch (error) {
        console.error("error while saving short quotation : ", error);
        throw new Response("Internal server error", { status: 500 });
    }
};