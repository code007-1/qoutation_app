import { LoaderFunction } from "@remix-run/node";
import { sortedSearch } from "~/modules/dbOnline";
import { verifyAccessToken } from "~/modules/utils";

export const loader: LoaderFunction = async ({ request, params }) => {
    try {
        const permissions = await verifyAccessToken(request);
        if (!permissions?.includes("read"))
            return new Response("user not authorized to read", { status: 405 });

        const url = new URL(request.url);
        const limit = 1000;
        const skip = Number(url.searchParams.get("skip")) || 0;

        const challanno = url.searchParams.get("challanno") || "";

        if (challanno != "") {
            const query = { "no": challanno };
            const result = await sortedSearch("unnamed", "complaints", query, limit, 0, -1, "_id");
            return Response.json(result, { status: 200 });
        }
        else {
            const result = await sortedSearch("unnamed", "complaints", {}, limit, skip, -1, "_id");
            return Response.json(result, { status: 200 });
        }
    }
    catch (error) {
        console.error("error while loading challans data : ", error);
        throw new Response("Internal server error", { status: 500 });
    }
}