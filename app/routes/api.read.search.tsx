import { LoaderFunction } from "@remix-run/node";
import { sortedSearch } from "~/modules/dbOnline";
import { challanCollectionName, complaintCollectionName, dbName, productCollectionName, purchaseInvoiceCollectionName, quotationCollectionName, verifyAccessToken } from "~/modules/utils";

export const loader: LoaderFunction = async ({ request, params }) => {
    try {
        const { permissions } = await verifyAccessToken(request);
        if (!permissions?.includes("read"))
            return new Response("user not authorized to read", { status: 405 });

        const url = new URL(request.url);
        const { type, skip, limit, ...query } = Object.fromEntries(url.searchParams.entries());

        var result;
        let limits = Number(limit || 1000);

        if (type === challanCollectionName)
            result = await sortedSearch(dbName, challanCollectionName, query, {}, limits, Number(skip || 0), -1, "_id");
        else if (type === quotationCollectionName)
            result = await sortedSearch(dbName, quotationCollectionName, query, {}, limits, Number(skip || 0), -1, "_id");
        else if (type === complaintCollectionName)
            result = await sortedSearch(dbName, complaintCollectionName, query, {}, limits, Number(skip || 0), -1, "_id");
        else if (type === productCollectionName)
            result = await sortedSearch(dbName, productCollectionName, query, {}, limits, Number(skip || 0), -1, "no");
        else if (type === purchaseInvoiceCollectionName)
            result = await sortedSearch(dbName, purchaseInvoiceCollectionName, query, {}, limits, Number(skip || 0), -1, "_id");
        else
            return new Response(`invalid data type requested`, { status: 405 });

        //if (result != undefined && result.length > 0)
        return Response.json(result, { status: 200 });
    }
    catch (error) {
        console.error("error while loading challans data : ", error);
        throw new Response("Internal server error", { status: 500 });
    }
}