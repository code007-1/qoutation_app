import { LoaderFunction } from "@remix-run/node";
import { sortedSearch } from "~/modules/dbOnline";
import { verifyAccessToken } from "~/modules/utils";

export const loader: LoaderFunction = async ({ request, params }) => {
    try {
        await verifyAccessToken(request);
        const url = new URL(request.url);
        const limit = 1000;
        const skip = Number(url.searchParams.get("skip")) || 0;
        const start = url.searchParams.get("skip") || "";
        const end = url.searchParams.get("skip") || "";
        const to = url.searchParams.get("skip") || "";
        const query = { start: start || new Date().toString(), end: new Date().toString(), to: to };

        console.log("skip is", skip);
        const result = await sortedSearch("unnamed", "quotations", query, limit, skip, -1, "_id");
        return Response.json(result, { status: 200 });
    }
    catch (error) {
        console.error("error while loading quote data : ", error);
        throw new Response("Internal server error", { status: 500 });
    }
}