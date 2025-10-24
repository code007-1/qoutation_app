import { ActionFunction } from "@remix-run/node";
import { ObjectId } from "mongodb"
import { bulkWriteToDb, insertOnetoDb, insertOrUpdateOnetoDb, search, update } from "~/modules/dbOnline";
import { dbName, logsCollectionName, prefixPurchaseInvoice, pruchaseInvoicePrefix, purchaseInvoiceCollectionName, serials, serialsCollectionName, verifyAccessToken } from "~/modules/utils";

export const action: ActionFunction = async ({ request, params }) => {
    try {
        const { permissions, username } = await verifyAccessToken(request);
        if (!permissions?.includes("write"))
            return new Response("user not authorized to create", { status: 405 });

        const { data, objectid } = await request.json();

        let result: any[] = [];
        if (objectid != "")
            result = await search(dbName, purchaseInvoiceCollectionName, { "_id": new ObjectId(data._id) }, { items: 1 }, 1, 0);
        console.log("jashdjkas result is ", result, new ObjectId(data._id));

        const bulkOps: any[] = [];

        // if invoice number is already present
        if (result.length > 0 && result[0].items) {
            const currentData = Object.fromEntries(data.items.map((e: any) => [e.sno.flat(), e.productid]));
            const oldData = Object.fromEntries(result[0].items.map((e: any) => [e.sno.flat(), e.productid]));
            const current = new Set(Object.keys(currentData));
            const old = new Set(Object.keys(oldData));//result.map((e: any) => e.items.sno).flat()

            const added = [...current].filter(x => !old.has(x)) as string[];
            const removed = [...old].filter(x => !current.has(x)) as string[];

            // for new added serial numbers
            bulkOps.push({
                "insertMany": added.map((element: any) => { return { sno: element, productid: currentData[element], purchaseInvoice: prefixPurchaseInvoice(data["vendor"], data.invoiceno), purchaseDate: data.date }; }
                )
            });

            console.log("bullkla", bulkOps);

            // for updating duplicates serial numbers
            if (pruchaseInvoicePrefix + data.invoiceno != result[0].invoiceno || data.date != result[0].date || data.vendor != result[0].vendor) {
                const duplicates = [...old].filter(x => current.has(x)) as string[];
                duplicates.forEach((element) => {
                    bulkOps.push({ "updateOne": { "filter": { "sno": element }, "update": { "$set": { "productid": currentData[element], "purchaseInvoice": data.invoiceno, "purchaseDate": data.date } } } });
                });
            }

            // for removed serial numbers
            const existing = await search(dbName, serialsCollectionName, { "sno": { "$in": removed } }, {}, removed.length, 0);
            existing.forEach((element: any) => {
                // this serialno product not sold yet, so remove this document
                if (!("saleInvoice" in element) || element.saleInvoice == "") {
                    bulkOps.push({ "deleteOne": { "filter": { "sno": element.sno } } });
                }
                // this serialno product sold already, so just update purchase info, but keep this serialno document
                else if (("saleInvoice" in element) && element.saleInvoice != "") {
                    bulkOps.push({ "updateOne": { "filter": { "sno": element.sno } }, "update": { "$set": { purchaseInvoice: "", purchaseDate: "" } } });
                }
            });

            // for quantity changes tracking
            const quantityChange: Record<string, number> = {};
            added.forEach(element => { quantityChange[element] = (quantityChange[element] || 0) + 1; });
            removed.forEach(element => { quantityChange[element] = (quantityChange[element] || 0) - 1; });
        }

        // if invoice number is new
        else {
            // for new added serial numbers - here everything is new
            bulkOps.push(
                ...data.items.map((element: any) => {
                    return element.sno.map((e: any) => {
                        return { "insertOne": { sno: e, productid: element["productid"], purchaseInvoice: prefixPurchaseInvoice(data["vendor"], data["invoiceno"]), purchaseDate: data["date"] } };
                    })
                }).flat()
            );
        }

        //console.log("bulk ops : ", JSON.stringify(bulkOps));
        console.log("bulk ops : ", data, JSON.stringify(bulkOps));
        const updateFilter: Record<string, any> = {};
        if (result.length > 0) {
            updateFilter["_id"] = new ObjectId(result[0]._id);
            await insertOrUpdateOnetoDb(data, dbName, purchaseInvoiceCollectionName, updateFilter, false);
            console.log("bulk ops : ", updateFilter, JSON.stringify(bulkOps));
        }
        else {
            //insertOnetoDb(data, dbName, purchaseInvoiceCollectionName);
        }

        //await bulkWriteToDb(bulkOps, dbName, serialsCollectionName);

        //await insertOnetoDb({ "by": username, "action": `purchase invoice entry`, "result": "succeded", "when": new Date().toISOString() }, dbName, logsCollectionName);
        return new Response("purchase invoice saved succefully", { status: 200 });
    }
    catch (error) {
        console.error("error while creating pdf : ", error);
        throw new Response("Internal server error", { status: 500 });
    }
};