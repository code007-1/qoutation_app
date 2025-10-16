import { LoaderFunction } from "@remix-run/node";
import { sortedSearch } from "~/modules/dbOnline";
import { complaintCollectionName, dbName, verifyAccessToken } from "~/modules/utils";

export const loader: LoaderFunction = async ({ request, params }) => {
    try {
        const permissions = await verifyAccessToken(request);
        if (!permissions?.includes("read"))
            return new Response("user not authorized to read", { status: 405 });

        const url = new URL(request.url);
        const limit = 1000;
        const skip = Number(url.searchParams.get("skip")) || 0;

        const start = url.searchParams.get("start") || "";
        const end = url.searchParams.get("end") || "";
        const to = url.searchParams.get("to") || "";

        if (start != "" || end != "" || to != "") {
            const query = { "date": { $gte: start, $lte: end } };
            const result = await sortedSearch(dbName, complaintCollectionName, query, limit, 0, -1, "_id");
            return Response.json(result, { status: 200 });
        }
        else {
            const result = await sortedSearch(dbName, complaintCollectionName, {}, limit, skip, -1, "_id");
            return Response.json(result, { status: 200 });
        }
    }
    catch (error) {
        console.error("error while loading challans data : ", error);
        throw new Response("Internal server error", { status: 500 });
    }
}