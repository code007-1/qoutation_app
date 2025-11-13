import { insertOnetoDb, insertOrUpdateOnetoDb, update } from "~/modules/dbOnline";
import { ActionFunction } from "@remix-run/node";
import { dbName, logsCollectionName, metaCollectionName, productCollectionName, verifyAccessToken } from "~/modules/utils";
import { products } from "~/modules/loadProducts";
import { ProductsData } from "~/component/statics";

function parseProduct(product: ProductsData): ProductsData {
    return {
        ...product,
        no: Number(product.no),
        price: Number(product.price),
        available: Number(product.available),
        sold: Number(product.sold),
        version: Number(products[product.no]?.version || 0) + 1
    };
}

export const action: ActionFunction = async ({ request, params }) => {
    try {
        const { permissions, username } = await verifyAccessToken(request);
        if (!permissions?.includes("write"))
            return new Response("user not authorized to create", { status: 405 });

        let data = parseProduct(await request.json() as ProductsData);

        await insertOrUpdateOnetoDb(data, dbName, productCollectionName, { "no": data.no }, true);
        await update(dbName, metaCollectionName, { "type": "products_tracker" }, { $inc: { "product_catelog_version": 1 } });

        await insertOnetoDb({ "by": username, "action": `saving product`, "result": "succeded", "when": new Date().toISOString() }, dbName, logsCollectionName);

        return new Response("product saved succefully", { status: 200 });
    }
    catch (error) {
        console.error("error while saving quotation : ", error);
        throw new Response("Internal server error", { status: 500 });
    }
};