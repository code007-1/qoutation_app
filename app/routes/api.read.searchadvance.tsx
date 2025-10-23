import { LoaderFunction } from "@remix-run/node";
import { sortedSearch } from "~/modules/dbOnline";
import { challanCollectionName, complaintCollectionName, dbName, productCollectionName, purchaseInvoiceCollectionName, quotationCollectionName, verifyAccessToken } from "~/modules/utils";

export const loader: LoaderFunction = async ({ request, params }) => {
    try {
        const { permissions } = await verifyAccessToken(request);
        if (!permissions?.includes("read"))
            return new Response("user not authorized to read", { status: 405 });


        var result;
        const limit = 1000;
        const url = new URL(request.url);
        const skip = Number(url.searchParams.get("skip")) || 0;
        const type = url.searchParams.get("type");

        if (type === challanCollectionName) {
            const sno = url.searchParams.get("sno") || "";
            const query = { "items.sno": sno };
            result = await sortedSearch(dbName, challanCollectionName, query, {}, limit, skip, -1, "_id");
        }
        else if (type === quotationCollectionName) {
            const start = url.searchParams.get("start") || "";
            const end = url.searchParams.get("end") || "";
            const to = url.searchParams.get("to") || "";
            let query = {};
            if (start != "" || end != "" || to != "")
                query = { "date": { $gte: start, $lte: end } };
            result = await sortedSearch(dbName, quotationCollectionName, query, {}, limit, skip, -1, "_id");
        }
        else if (type === complaintCollectionName) {
            const start = url.searchParams.get("start") || "";
            const end = url.searchParams.get("end") || "";
            const to = url.searchParams.get("to") || "";
            let query = {};
            if (start != "" || end != "" || to != "")
                query = { "date": { $gte: start, $lte: end } };
            result = await sortedSearch(dbName, complaintCollectionName, query, {}, limit, skip, -1, "_id");
        }
        else if (type === purchaseInvoiceCollectionName) {
            const start = url.searchParams.get("start") || "";
            const end = url.searchParams.get("end") || "";
            const to = url.searchParams.get("to") || "";
            let query = {};
            if (start != "" || end != "" || to != "")
                query = { "date": { $gte: start, $lte: end } };

            result = await sortedSearch(dbName, purchaseInvoiceCollectionName, query, {}, limit, skip, -1, "_id");
        }
        else
            return new Response(`invalid data type requested`, { status: 405 });

        return Response.json(result, { status: 200 });
    }
    catch (error) {
        console.error("error while loading quotations data : ", error);
        throw new Response("Internal server error", { status: 500 });
    }
}