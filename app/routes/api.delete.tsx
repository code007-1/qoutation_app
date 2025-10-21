import { ActionFunction } from "@remix-run/node";
import { deleteOneFromDB, insertOnetoDb } from "~/modules/dbOnline";
import { challanCollectionName, complaintCollectionName, dbName, logsCollectionName, quotationCollectionName, verifyAccessToken } from "~/modules/utils";

export const action: ActionFunction = async ({ request, params }) => {
    try {
        const { permissions } = await verifyAccessToken(request);
        if (!permissions.includes("delete"))
            return new Response("user not authorized to delete", { status: 405 });

        const { no, username, type } = await request.json();
        var result;
        if (type === "challans")
            result = await deleteOneFromDB(no, dbName, challanCollectionName);
        else if (type === "quotations")
            result = await deleteOneFromDB(no, dbName, quotationCollectionName);
        else if (type === "complaints")
            result = await deleteOneFromDB(no, dbName, complaintCollectionName);
        else
            return new Response(`nothing to deleted`, { status: 500 });

        if (result != undefined && result > 0) {
            await insertOnetoDb({ "by": username, "action": `deleting ${type} ${no}`, "result": "succeded", "when": new Date().toISOString() }, dbName, logsCollectionName);
            return new Response(`${type} deleted`, { status: 200 });
        }
        else {
            await insertOnetoDb({ "by": username, "action": `deleting ${type} ${no}`, "result": "failed", "when": new Date().toISOString() }, dbName, logsCollectionName);
            return new Response(`${type} not deleted`, { status: 500 });
        }
    }
    catch (error) {
        console.log(`error while deleting quotation or challan data : `, error);
        throw new Response("Error while deleting quotation or challan data", { status: 500 });
    }
}