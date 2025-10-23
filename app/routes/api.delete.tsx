import { ActionFunction } from "@remix-run/node";
import { deleteOneFromDB, insertOnetoDb, update } from "~/modules/dbOnline";
import { challanCollectionName, complaintCollectionName, dbName, logsCollectionName, metaCollectionName, productCollectionName, purchaseInvoiceCollectionName, quotationCollectionName, verifyAccessToken } from "~/modules/utils";

export const action: ActionFunction = async ({ request, params }) => {
    try {
        const { username, permissions } = await verifyAccessToken(request);
        if (!permissions.includes("delete"))
            return new Response("user not authorized to delete", { status: 405 });

        const { filter, type } = await request.json();

        if (Object.keys(filter).length == 0)
            return new Response(`nothing to delete`, { status: 200 });

        var result;
        if (type === challanCollectionName)
            result = await deleteOneFromDB(filter, dbName, challanCollectionName);
        else if (type === quotationCollectionName)
            result = await deleteOneFromDB(filter, dbName, quotationCollectionName);
        else if (type === complaintCollectionName)
            result = await deleteOneFromDB(filter, dbName, complaintCollectionName);
        else if (type === productCollectionName) {
            result = await deleteOneFromDB(filter, dbName, productCollectionName);
            await update(dbName, metaCollectionName, { "type": "products_tracker" }, { $inc: { "product_catelog_version": 1 } });
        }
        else if (type === purchaseInvoiceCollectionName)
            result = await deleteOneFromDB(filter, dbName, purchaseInvoiceCollectionName);
        else
            return new Response(`nothing to deleted`, { status: 405 });

        if (result != undefined && result > 0) {
            await insertOnetoDb({ "by": username, "action": `deleting ${type} - ${filter}`, "result": "succeded", "when": new Date().toISOString() }, dbName, logsCollectionName);
            return new Response(`${type} deleted`, { status: 200 });
        }
        else {
            await insertOnetoDb({ "by": username, "action": `deleting ${type} - ${filter}`, "result": "failed", "when": new Date().toISOString() }, dbName, logsCollectionName);
            return new Response(`${type} not deleted`, { status: 500 });
        }
    }
    catch (error) {
        console.log(`error while deleting quotation or challan data : `, error);
        throw new Response("Error while deleting quotation or challan data", { status: 500 });
    }
}