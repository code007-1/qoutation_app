import { insertOnetoDb, insertOrUpdateOnetoDb } from "~/modules/dbOnline";
import { ActionFunction } from "@remix-run/node";
import { complaintCollectionName, dbName, logsCollectionName, verifyAccessToken } from "~/modules/utils";

//export let loader: LoaderFunction = async ({ request, params }) => {
export const action: ActionFunction = async ({ request, params }) => {
    try {
        await verifyAccessToken(request);
        const data = await request.json();

        await insertOrUpdateOnetoDb(data, dbName, complaintCollectionName);

        await insertOnetoDb({ "by": data.recordedby, "action": `saving complaint`, "result": "succeded", "when": new Date().toISOString() }, dbName, logsCollectionName);
        // finally create the Response with the correct Content-Type header for a PDF
        return new Response("complaint saved succefully", { status: 200 });
    }
    catch (error) {
        console.error("error while saving quotation : ", error);
        throw new Response("Internal server error", { status: 500 });
    }
};