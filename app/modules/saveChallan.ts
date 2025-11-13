import { challanCollectionName, dbName, serialsCollectionName } from "./utils";
import { bulkWriteToDb, insertOrUpdateOnetoDb, redis, search } from "./dbOnline";
import { ChallanItems, ChallanData, SerialsData } from "~/component/statics";
import { E } from "node_modules/@upstash/redis/zmscore-Cq_Bzgy4.mjs";

export function getStats(serialData: SerialsData) {
    if ("purchaseInvoiceNo" in serialData && serialData.purchaseInvoiceNo !== "") {
        if ("challanNo" in serialData && serialData.challanNo !== "") {
            return "sold"
        }
        else return "available"
    }
}

export default async function SaveChallan(challandData: ChallanData) {
    try {
        const { _id, ...data } = challandData;

        let result: any[] = [];
        if (data.no)
            result = await search(dbName, challanCollectionName, { "no": data.no }, { "projection": { items: 1 } }, 1, 0);

        const serialBulkOps: any[] = [];
        let editedProducts: Set<string> = new Set();

        const currentData: Record<string, string> = Object.fromEntries(data.items.flatMap((e: any) => { return e.sno.map((k: any) => [k, e.no]) }));
        // if chalan number is already present
        if (result.length > 0 && result[0].items) {
            const oldData: Record<string, string> = Object.fromEntries(result[0].items.flatMap((e: any) => { return e.sno.map((k: any) => [k, e.no]) }));

            const allEditedSerials: Record<string, { productId: string; no: string }> = {};
            [...Object.keys(currentData), ...Object.keys(oldData)].forEach((e: string) => {
                allEditedSerials[e[0] + e[1]] = { productId: e[1], no: e[0] };
            });

            let allEditedSerialsData: Record<string, { status: string; no: string; productId: string }> = Object.fromEntries(
                (await search(dbName, serialsCollectionName, { no: { "$or": Object.values(allEditedSerials) } }, { "projection": { "status": 1, "no": 1, "productId": 1 } }))
                    .map((item) => [item.no, item])
            );

            // serial number - productid
            Object.entries(currentData).forEach((element) => {
                editedProducts.add(element[1]);

                if (!(element[0] in oldData)) // for new added serial number
                {
                    if (allEditedSerialsData[element[0]].status == "available") {
                        serialBulkOps.push({
                            "updateOne": {
                                "filter": { productId: element[1], no: element[0] },
                                "update": { "$set": { challanNo: data.no, challanDate: data.date, status: "sold" } },
                            }
                        })
                    }
                    else if (!(element[0] in allEditedSerialsData)) {// no purchase entry found at all
                        serialBulkOps.push({
                            "insertOne": { productId: element[1], no: element[0], challanNo: data.no, challanDate: data.date, status: "invalid" }
                        })
                    }
                }
                else { // in both current data and old data
                    if (data.date != result[0].date) { // date field has been changed, because no other data here, we are saving that could change 
                        serialBulkOps.push({
                            "updateOne": {
                                "filter": { productId: element[1], no: element[0] },
                                "update": { "$set": { challanDate: data.date } },
                            }
                        })
                    }
                }
            });

            Object.entries(oldData).forEach((element) => {
                editedProducts.add(element[1]);
                if (!(element[0] in currentData)) { // this serial number has been removed, i.e., not sold now, only purchased
                    serialBulkOps.push({
                        "updateOne": {
                            "filter": { productId: element[1], "no": element[0] },
                            "update": { "$set": { status: "available", challanDate: data.date } },
                        }
                    });
                }

            });

        }

        else {
            const allEditedSerials: Record<string, { productId: string; no: string }> = {};
            [...Object.keys(currentData)].forEach((e: string) => {
                allEditedSerials[e[0] + e[1]] = { productId: e[1], no: e[0] };
            });

            let allEditedSerialsData: Record<string, { status: string; no: string; productId: string }> = Object.fromEntries(
                (await search(dbName, serialsCollectionName, { no: { "$or": Object.values(allEditedSerials) } }, { "projection": { "status": 1, "no": 1, "productId": 1 } }))
                    .map((item) => [item.no, item])
            );
            // for new added serial numbers - here everything is new i.e., new challan created
            serialBulkOps.push(
                ...data.items.map((element: ChallanItems) => {
                    return element?.sno?.map((e: string) => {
                        editedProducts.add(element.no.toString());
                        // we are doing updateOne instead of insertOne with upsert true here, 
                        // just in case for a serial number never purchased but getting sold 
                        if (allEditedSerialsData[e].status == "available") {
                            return {
                                "updateOne": {
                                    "filter": { no: e, productId: element.no },
                                    "update": { "$set": { challanNo: data.no, challanDate: data.date, status: "sold" } },
                                }
                            };
                        }
                        else if (!(e in allEditedSerialsData)) {// no purchase entry found at all
                            serialBulkOps.push({
                                "insertOne": { productId: element.no, no: e, challanNo: data.no, challanDate: data.date, status: "invalid" }
                            })
                        }
                    })
                }).flat()
            );
        }

        // writes to challans collection
        await insertOrUpdateOnetoDb(data, dbName, challanCollectionName, { "no": data.no }, true);

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
                if (element["status"] === "available") {
                    currentStocks[element["productId"]] = (currentStocks[element["productId"]] || 0) + 1;

                    if (element["productId"] in currentSerials)
                        currentSerials[element["productId"]].push(String(element["no"]));
                    else
                        currentSerials[element["productId"]] = [String(element["no"])];
                }
                else if (element["status"] === "invalid") //soldwithoutpurchasing
                    currentStocks[element["productId"]] = (currentStocks[element["productId"]] || 0) - 1;
                else
                    currentStocks[element["productId"]] = (currentStocks[element["productId"]] || 0);
            });

            // writes quantity to products collection
            Object.entries(currentStocks).forEach(element => {
                productsBulkOps.push({ "updateOne": { "filter": { "no": element[0] } }, "update": { "$set": { "quantity": element[1] } } });
            });

            // writes serials to redis set for fast cache
            Object.entries(currentSerials).forEach(async (element) => {
                await redis.del(`product:${element[0]}:serial`);
                await redis.sadd(`product:${element[0]}:serial`, ...element[1]);
            });
        }
    }
    catch (error) {
        console.error("error while saving challan data : ", error);
    }
}