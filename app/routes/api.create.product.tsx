import { insertOnetoDb, insertOrUpdateOnetoDb, update } from "~/modules/dbOnline";
import { ActionFunction } from "@remix-run/node";
import { dbName, logsCollectionName, metaCollectionName, productCollectionName, verifyAccessToken } from "~/modules/utils";

export const action: ActionFunction = async ({ request, params }) => {
    try {
        const { permissions, username } = await verifyAccessToken(request);
        if (!permissions?.includes("write"))
            return new Response("user not authorized to create", { status: 405 });

        const data = await request.json();
        await insertOrUpdateOnetoDb(data, dbName, productCollectionName, { "productid": data.productid }, true);
        await update(dbName, metaCollectionName, { "type": "products_tracker" }, { $inc: { "product_catelog_version": 1 } });

        await insertOnetoDb({ "by": username, "action": `saving product`, "result": "succeded", "when": new Date().toISOString() }, dbName, logsCollectionName);

        return new Response("product saved succefully", { status: 200 });
    }
    catch (error) {
        console.error("error while saving quotation : ", error);
        throw new Response("Internal server error", { status: 500 });
    }
};