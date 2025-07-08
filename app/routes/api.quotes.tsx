import { LoaderFunction } from "@remix-run/node";
import { sortedSearch } from "~/modules/dbOnline";
import { verifyAccessToken } from "~/modules/utils";

export const loader: LoaderFunction = async ({ request, params }) => {
    try {
        await verifyAccessToken(request);
        const url = new URL(request.url);
        const limit = 100;
        const skip = Number(url.searchParams.get("skip")) || 0;
        const result = await sortedSearch("unnamed", "quotations", {}, limit, skip, -1, "_id");
        return Response.json(result, { status: 200 });
    }
    catch (error) {
        console.error("error while loading data : ", error);
        throw new Response("Internal server error", { status: 500 });
    }
}