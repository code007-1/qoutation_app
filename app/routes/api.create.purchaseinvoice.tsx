import { ActionFunction } from "@remix-run/node";
import { ObjectId } from "mongodb"
import { bulkWriteToDb, insertOnetoDb, insertOrUpdateOnetoDb, redis, search, } from "~/modules/dbOnline";
import { dbName, prefixPurchaseInvoice, productCollectionName, pruchaseInvoicePrefix as purchaseInvoicePrefix, purchaseInvoiceCollectionName, serialsCollectionName, verifyAccessToken } from "~/modules/utils";

export const action: ActionFunction = async ({ request, params }) => {
    try {
        const { permissions } = await verifyAccessToken(request);
        if (!permissions?.includes("write"))
            return new Response("user not authorized to create", { status: 405 });

        const { _id, ...data } = await request.json();

        let result: any[] = [];
        if (_id && _id != "")
            result = await search(dbName, purchaseInvoiceCollectionName, { "_id": new ObjectId(_id) }, { items: 1 }, 1, 0);

        const serialBulkOps: any[] = [];
        let editedProducts: Set<string> = new Set();

        const currentData = Object.fromEntries(data.items.flatMap((e: any) => { return e.sno.map((k: any) => [k, e.no]) }));
        // if invoice number is already present
        if (result.length > 0 && result[0].items) {
            const oldData = Object.fromEntries(result[0].items.flatMap((e: any) => { return e.sno.map((k: any) => [k, e.no]) }));
            const current = new Set(Object.keys(currentData));
            const old = new Set(Object.keys(oldData));//result.map((e: any) => e.items.sno).flat()
            editedProducts = new Set([...current, ...old]);

            const added = [...current].filter(x => !old.has(x)) as string[];
            const removed = [...old].filter(x => !current.has(x)) as string[];

            // for new added serial numbers
            added.forEach(element => {
                serialBulkOps.push({ "insertOne": { sno: element, productid: currentData[element], purchaseInvoice: prefixPurchaseInvoice(data["vendor"], data.no), purchaseDate: data.date } })
            });

            // for updating duplicates serial numbers
            if (purchaseInvoicePrefix + data.no != result[0].invoiceno || data.date != result[0].date || data.vendor != result[0].vendor) {
                const duplicates = [...old].filter(x => current.has(x)) as string[];
                duplicates.forEach((element) => {
                    serialBulkOps.push({ "updateOne": { "filter": { "sno": element }, "update": { "$set": { "productid": currentData[element], "purchaseInvoice": data.no, "purchaseDate": data.date } } } });
                });
            }

            // would check this functionality after attaching challan serials collection
            // for removed serial numbers
            const existing = await search(dbName, serialsCollectionName, { "sno": { "$in": removed } }, {}, removed.length, 0);
            existing.forEach((element: any) => {
                // this serialno product sold already, so just update purchase info, but keep this serialno document
                if (("saleInvoice" in element) && element.saleInvoice != "") {
                    serialBulkOps.push({ "updateOne": { "filter": { "sno": element.sno }, "update": { "$set": { purchaseInvoice: "", purchaseDate: "" } } } });
                }

                // this serialno product not sold yet, so remove this document
                else //(!("saleInvoice" in element) || element.saleInvoice == "") 
                {
                    serialBulkOps.push({ "deleteOne": { "filter": { "sno": element.sno } } });
                }
            });

            // for quantity changes tracking
            //const quantityChange: Record<string, number> = {};
            //added.forEach(element => { quantityChange[element] = (quantityChange[element] || 0) + 1; });
            //removed.forEach(element => { quantityChange[element] = (quantityChange[element] || 0) - 1; });
            //console.log("bulk operations", bulkOps, "current : ", current, "old : ", old, "currentData : ", currentData, "oldData : ", oldData, "added : ", added, "removed : ", removed);
        }

        // if invoice number is new
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

        //console.log("bulk ops : ", JSON.stringify(bulkOps));
        //console.log("bulk ops : ", data, JSON.stringify(bulkOps));

        //wrties to purchase invoice collection
        if (result.length > 0) await insertOrUpdateOnetoDb(data, dbName, purchaseInvoiceCollectionName, { _id: new ObjectId(_id) }, false);
        else await insertOnetoDb(data, dbName, purchaseInvoiceCollectionName);

        // writes to serials collection
        if (serialBulkOps.length > 0)
            await bulkWriteToDb(serialBulkOps, dbName, serialsCollectionName);

        // writes to products collection
        if (editedProducts.size > 0) {
            const products = await search(dbName, serialsCollectionName, { "productid": { "$in": [...editedProducts] } }, { "projection": { "purchaseInvoice": 1, "salesInvoice": 1, "productid": 1, "sno": 1 } }, 1e7, 0);
            const currentStocks: Record<string, number> = {};
            const currentSerials: Record<string, [string]> = {};
            const productsBulkOps: { updateOne: { filter: { no: string; }; }; update: { $set: { quantity: number; }; }; }[] = [];

            products.forEach(element => {
                currentStocks[element["productid"]] = (currentStocks[element["productid"]] || 0) + (element["purchaseInvoice"] ? 1 : 0);
                currentStocks[element["productid"]] = (currentStocks[element["productid"]] || 0) + (element["salesInvoice"] ? -1 : 0);

                if (!("salesInvoice" in element) || element["salesInvoice"] === "")
                    if (element["productid"] in currentSerials)
                        currentSerials[element["productid"]].push(String(element["sno"]));
                    else
                        currentSerials[element["productid"]] = [String(element["sno"])];
            });

            Object.entries(currentStocks).forEach(element => {
                productsBulkOps.push({ "updateOne": { "filter": { "no": element[0] } }, "update": { "$set": { "quantity": element[1] } } });
            });

            // writes quantity to products collection
            await bulkWriteToDb(productsBulkOps, dbName, productCollectionName);

            // writes serials to redis set for fast cache
            Object.entries(currentSerials).forEach(async (element) => {
                await redis.del(`product:${element[0]}:serial`);
                await redis.sadd(`product:${element[0]}:serial`, ...element[1]);
            });
        }

        // writes to logs collection
        //await insertOnetoDb({ "by": username, "action": `purchase invoice entry`, "result": "succeded", "when": new Date().toISOString() }, dbName, logsCollectionName);
        return new Response("purchase invoice saved succefully", { status: 200 });
    }
    catch (error) {
        console.error("error while creating pdf : ", error);
        throw new Response("Internal server error", { status: 500 });
    }
};