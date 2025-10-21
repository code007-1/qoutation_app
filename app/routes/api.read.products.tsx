import { LoaderFunction } from "@remix-run/node";
import { products } from "~/modules/loadCSV";
import { verifyAccessToken } from "~/modules/utils";

export const loader: LoaderFunction = async ({ request, params }) => {
    try {
        const { permissions } = await verifyAccessToken(request);
        if (!permissions?.includes("read"))
            return new Response("user not authorized to read", { status: 405 });

        return Response.json(Object.values(products), { status: 200 });
    }
    catch (error) {
        console.error("error while loading quotations data : ", error);
        throw new Response("Internal server error", { status: 500 });
    }
}