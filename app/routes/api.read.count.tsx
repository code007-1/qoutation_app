import { count } from "~/modules/dbOnline";
import { LoaderFunction } from "@remix-run/node";
import { dbName, verifyAccessToken } from "~/modules/utils";

export const loader: LoaderFunction = async ({ request, params }) => {
    try {
        const { permissions } = await verifyAccessToken(request);
        if (!permissions?.includes("read"))
            return new Response("user not authorized to create", { status: 405 });

        const url = new URL(request.url);
        const { type, ...query } = Object.fromEntries(url.searchParams.entries());

        if (!type)
            return new Response("Invalid data type", { status: 405 });

        const result = await count(dbName, type, query);

        return new Response(JSON.stringify(result), { status: 200 });
    }
    catch (error) {
        console.error("error while saving quotation : ", error);
        throw new Response("Internal server error", { status: 500 });
    }
};