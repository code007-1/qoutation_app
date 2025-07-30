import { ActionFunction } from "@remix-run/node";
import { deleteOneFromDB, insertOnetoDb } from "~/modules/dbOnline";
import { verifyAccessToken } from "~/modules/utils";

export const action: ActionFunction = async ({ request, params }) => {
    try {
        await verifyAccessToken(request);
        const { no, username } = await request.json();
        console.log("deleting quotation no : ", no, " by user : ", username);
        const result = await deleteOneFromDB(no);
        await insertOnetoDb({ "by": username, "action": `deleting quotation ${no}`, "result": "succeded", "when": new Date().toISOString() }, "unnamed", "logs");
        return new Response("Quotation deleted", { status: 200 });
    }
    catch (error) {
        console.log("error while deleting quotation data : ", error);
        throw new Response("Error while deleting quotation data", { status: 500 });
    }
}