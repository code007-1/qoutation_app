import { insertOnetoDb, insertOrUpdateOnetoDb } from "~/modules/dbOnline";
import { ActionFunction } from "@remix-run/node";
import { verifyAccessToken } from "~/modules/utils";

//export let loader: LoaderFunction = async ({ request, params }) => {
export const action: ActionFunction = async ({ request, params }) => {
    try {
        await verifyAccessToken(request);
        const data = await request.json();

        await insertOrUpdateOnetoDb(data);

        await insertOnetoDb({ "by": data.madeby, "action": `saving complaint`, "result": "succeded", "when": new Date().toISOString() }, "unnamed", "logs");
        // finally create the Response with the correct Content-Type header for a PDF
        return new Response("complain saved succefully", { status: 200 });
    }
    catch (error) {
        console.error("error while saving quotation : ", error);
        throw new Response("Internal server error", { status: 500 });
    }
};