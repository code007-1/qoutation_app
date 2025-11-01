import { LoaderFunction } from "@remix-run/node";
import { sortedSearch } from "~/modules/dbOnline";
import { challanCollectionName, complaintCollectionName, dbName, productCollectionName, purchaseInvoiceCollectionName, fullQuotationCollectionName, verifyAccessToken, shortQuotationCollectionName } from "~/modules/utils";

export const loader: LoaderFunction = async ({ request, params }) => {
    try {
        const { permissions } = await verifyAccessToken(request);
        if (!permissions?.includes("read"))
            return new Response("user not authorized to read", { status: 405 });

        const url = new URL(request.url);
        const { type, skip, limit, ...query } = Object.fromEntries(url.searchParams.entries());

        var result;
        let limits = Number(limit || 1000);
        let skips = Number(skip || 0);

        let collectionName = "";
        let findOptions = {};
        if (type === challanCollectionName) {
            collectionName = challanCollectionName;
            if (Object.keys(query).length == 0)
                findOptions = { "projection": { "no": 1, "billno": 1, "madeby": 1, "date": 1, "to": 1, "category": 1, "items.sno": 1 } };
        }
        else if (type === fullQuotationCollectionName) {
            collectionName = fullQuotationCollectionName;
            if (Object.keys(query).length == 0)
                findOptions = { "projection": { "no": 1, "madeby": 1, "date": 1, "to": 1, "discount": 1, "addon": 1, "amount": 1 } };
        }
        else if (type === shortQuotationCollectionName) {
            collectionName = shortQuotationCollectionName;
            findOptions = { "projection": { "no": 1, "madeby": 1, "date": 1, "to": 1, "discount": 1, "addon": 1, "amount": 1 } };
        }
        else if (type === complaintCollectionName) {
            collectionName = complaintCollectionName;
            findOptions = { "projection": { "no": 1, "recordedby": 1, "date": 1, "type": 1, "complaint": 1, "status": 1 } };
        }
        else if (type === productCollectionName)
            collectionName = productCollectionName;
        else if (type === purchaseInvoiceCollectionName) {
            collectionName = purchaseInvoiceCollectionName;
            if (Object.keys(query).length == 0)
                findOptions = { "projection": { "no": 1, "vendor": 1, "date": 1, "amount": 1, "quantity": 1 } };
        }
        else
            return new Response(`invalid data type requested`, { status: 405 });

        result = await sortedSearch(dbName, collectionName, query, findOptions, limits, skips, -1, "_id");
        return Response.json(result, { status: 200 });
    }
    catch (error) {
        console.error("error while loading challans data : ", error);
        throw new Response("Internal server error", { status: 500 });
    }
}