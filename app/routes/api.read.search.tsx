import { LoaderFunction } from "@remix-run/node";
import { sortedSearch } from "~/modules/dbOnline";
import { challanCollectionName, complaintCollectionName, dbName, productCollectionName, purchaseInvoiceCollectionName, fullQuotationCollectionName, verifyAccessToken, shortQuotationCollectionName, serialsCollectionName } from "~/modules/utils";
import { SortDirection } from "mongodb";

export const loader: LoaderFunction = async ({ request, params }) => {
    try {
        const { permissions } = await verifyAccessToken(request);
        if (!permissions?.includes("read"))
            return new Response("user not authorized to read", { status: 405 });

        const url = new URL(request.url);
        const { type, skip, limit, sortString, sortOrder, full, ...query } = Object.fromEntries(url.searchParams.entries());

        var result;
        const limits = Number(limit || 1000);
        const skips = Number(skip || 0);
        const sortKey = sortString || "_id";
        const sortDir = (Number(sortOrder || -1)) as SortDirection;
        const fetchFull = full == "true" ? true : false;
        const queries: { [k: string]: any } = query;

        let collectionName = "";
        let findOptions = {};
        if (type === challanCollectionName) {
            collectionName = challanCollectionName;
            if (!fetchFull)
                findOptions = { "projection": { "no": 1, "billno": 1, "madeby": 1, "date": 1, "to": 1, "category": 1, "items.sno": 1 } };
        }
        else if (type === fullQuotationCollectionName) {
            collectionName = fullQuotationCollectionName;
            if (!fetchFull)
                findOptions = { "projection": { "no": 1, "madeby": 1, "date": 1, "to": 1, "discount": 1, "addon": 1, "amount": 1 } };
        }
        else if (type === shortQuotationCollectionName) {
            collectionName = shortQuotationCollectionName;
            if (!fetchFull)
                findOptions = { "projection": { "no": 1, "madeby": 1, "date": 1, "to": 1, "discount": 1, "addon": 1, "amount": 1 } };
        }
        else if (type === complaintCollectionName) {
            collectionName = complaintCollectionName;
            findOptions = { "projection": { "no": 1, "recordedby": 1, "date": 1, "type": 1, "complaint": 1, "status": 1 } };
        }
        else if (type === productCollectionName) {
            collectionName = productCollectionName;
            if ("no" in query) queries["no"] = Number(query["no"]);
        }
        else if (type === purchaseInvoiceCollectionName) {
            collectionName = purchaseInvoiceCollectionName;
            if (!fetchFull)
                findOptions = { "projection": { "no": 1, "vendor": 1, "date": 1, "amount": 1, "quantity": 1 } };
        }
        else if (type === serialsCollectionName) {
            collectionName = serialsCollectionName;
            if ("productId" in query) queries["productId"] = Number(query["productId"]);
        }
        else
            return new Response(`invalid data type requested`, { status: 405 });

        result = await sortedSearch(dbName, collectionName, queries, findOptions, limits, skips, sortDir, sortKey);
        let headers = new Headers({ "Content-Type": "application/json" });
        return Response.json(result, { status: 200, headers: headers });
    }
    catch (error) {
        console.error("error while loading challans data : ", error);
        throw new Response("Internal server error", { status: 500 });
    }
}