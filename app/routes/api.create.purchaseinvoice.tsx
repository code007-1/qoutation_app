import { ActionFunction } from "@remix-run/node";
import { ObjectId } from "mongodb"
import { bulkWriteToDb, insertOnetoDb, insertOrUpdateOnetoDb, redis, search, } from "~/modules/dbOnline";
import { dbName, prefixPurchaseInvoice, productCollectionName, pruchaseInvoicePrefix as purchaseInvoicePrefix, purchaseInvoiceCollectionName, serialsCollectionName, verifyAccessToken, challanCollectionName, logsCollectionName } from "~/modules/utils";
import { PurchaseInvoiceData } from "~/component/statics";

//right now id doesn't handle duplication of serial numbers when, in same challan or purchase invoice there are two products with same serial number
export const action: ActionFunction = async ({ request, params }) => {
    try {
        const { permissions, username } = await verifyAccessToken(request);
        if (!permissions?.includes("write"))
            return new Response("user not authorized to create", { status: 405 });

        const { _id, ...data } = await request.json();

        let result: PurchaseInvoiceData[] = [];
        if (_id && _id != "")
            result = await search(dbName, purchaseInvoiceCollectionName, { "_id": new ObjectId(_id) }, { "projection": { items: 1 } }, 1, 0) as PurchaseInvoiceData[];

        const serialBulkOps: any[] = [];
        let editedProducts: Set<string> = new Set();

        const currentData = Object.fromEntries(data.items.flatMap((e: any) => { return e.sno.map((k: any) => [k, e.no]) }));
        // if invoice number is already present
        if (result.length > 0 && result[0].items) {
            const oldData = Object.fromEntries(result[0].items.flatMap((e: any) => { return e.sno.map((k: any) => [k, e.no]) }));

            /*const allEditedSerials: Record<string, {}> = {};
            [...Object.keys(currentData), ...Object.keys(currentData)].forEach(e => {
                allEditedSerials[e[0] + e[1]] = { productId: e[1], no: e[0] };
            });

            use it - let allEditedSerialsData = await search(dbName, serialsCollectionName, { no: { "$or": Object.values(allEditedSerials) } }, { "projection": { "status": 1, "no": 1, "productId": 1 } });
*/
            // serial number - productid
            Object.entries(currentData).forEach((element) => {
                editedProducts.add(element[1]);
                if (!(element[0] in oldData)) // for new added serial number
                {
                    serialBulkOps.push({
                        "updateOne": {
                            "filter": { productId: element[1], no: element[0] },
                            "update": { "$set": { no: element[0], productid: element[1], purchaseInvoice: data.no, purchaseDate: data.date, status: "purchased" } },
                            "upsert": true, // This will insert if no match is found, but we are updating for case where it's been sold already but later purcahsed entry is being done
                        }
                    })
                }
                else { // in both current data and old data
                    if (data.date != result[0].date) { // date field has been changed, because no other data we are saving that could change 
                        serialBulkOps.push({
                            "updateOne": {
                                "filter": { productId: element[1], no: element[0] },
                                "update": { "$set": { purchaseInvoiceNo: data.date, purchaseDate: data.date } },
                            }
                        })
                    }
                }
            });

            const removedSerials: Set<string> = new Set();
            Object.entries(oldData).forEach((element) => {
                editedProducts.add(element[1]);
                removedSerials.add(element[0]);
            });

            const removedSerialsData = await search(dbName, serialsCollectionName, { "no": { "$in": [...removedSerials] } }, { "projection": { "status": 1, "no": 1, "productId": 1 } });
            removedSerialsData.forEach((element) => {
                if (element.no in oldData && element.productId === oldData[element.no]) { // this serial number has been removed, i.e., not purchased now
                    if (element.status === "sold")
                    // but if we have only keeps sold and purchased status, what happens when a product sold and never pruchased, how do we track that,
                    // possible answer to have more status, wopSold - without purchased sold
                    {
                        serialBulkOps.push({
                            "updateOne": {
                                "filter": { productId: element.productId, no: element.no },
                                "update": { "$set": { status: "swop", purchaseDate: data.date } },
                            }
                        });
                    }
                    else { // it must be element.status === "purchased"
                        serialBulkOps.push({
                            "deleteOne": {
                                "filter": { productId: element.productId, no: element.no }
                            }
                        });
                    }
                }
            });
        }

        // if invoice number is new i.e., each serial number is new 
        else {
            // for new added serial numbers - here everything is new
            serialBulkOps.push(
                ...data.items.map((element: any) => {
                    return element.sno.map((e: any) => {
                        editedProducts.add(element["no"]);
                        return { "insertOne": { sno: e, productid: element["no"], purchaseInvoice: prefixPurchaseInvoice(data["vendor"], data["no"]), purchaseDate: data["date"] } };
                    })
                }).flat()
            );
        }

        //wrties to purchase invoice collection collection
        if (result.length > 0) await insertOrUpdateOnetoDb(data, dbName, purchaseInvoiceCollectionName, { "_id": new ObjectId(_id) }, false);
        else await insertOnetoDb(data, dbName, challanCollectionName);

        // writes to serials collection
        if (serialBulkOps.length > 0)
            await bulkWriteToDb(serialBulkOps, dbName, serialsCollectionName);

        // for calculating products quantity
        if (editedProducts.size > 0) {
            const products = await search(dbName, serialsCollectionName, { "productId": { "$in": [...editedProducts] } }, { "projection": { "status": 1, "productId": 1 } }, 1e7, 0);
            const currentStocks: Record<string, number> = {};
            const currentSerials: Record<string, [string]> = {};
            const productsBulkOps: { updateOne: { filter: { no: string; }; }; update: { $set: { quantity: number; }; }; }[] = [];

            products.forEach(element => {
                if (element["status"] === "purchased") {
                    currentStocks[element["productId"]] = (currentStocks[element["productId"]] || 0) + 1;

                    if (element["productId"] in currentSerials)
                        currentSerials[element["productId"]].push(String(element["no"]));
                    else
                        currentSerials[element["productId"]] = [String(element["no"])];
                }
                else if (element["status"] == "swop")
                    currentStocks[element["productId"]] = (currentStocks[element["productId"]] || 0) - 1;
                else
                    currentStocks[element["productId"]] = (currentStocks[element["productId"]] || 0);
            });

            // writes quantity to products collection
            Object.entries(currentStocks).forEach(element => {
                productsBulkOps.push({ "updateOne": { "filter": { "no": element[0] } }, "update": { "$set": { "quantity": element[1] } } });
            });

            await bulkWriteToDb(productsBulkOps, dbName, productCollectionName);

            // writes serials to redis set for fast cache
            Object.entries(currentSerials).forEach(async (element) => {
                await redis.del(`product:${element[0]}:serial`);
                await redis.sadd(`product:${element[0]}:serial`, ...element[1]);
            });
        }

        // writes to logs collection
        await insertOnetoDb({ "by": username, "action": `challan edited or created`, "result": "succeded", "when": new Date().toISOString() }, dbName, logsCollectionName);
        return new Response("purchase invoice saved succefully", { status: 200 });
    }
    catch (error) {
        console.error("error while creating pdf : ", error);
        throw new Response("Internal server error", { status: 500 });
    }
};