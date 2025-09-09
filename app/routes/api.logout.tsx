import { LoaderFunction } from "@remix-run/node";
//import { insertOnetoDb } from "~/modules/dbOnline";
import { commitSession, getSession } from "~/modules/sessions";
import { verifyAccessToken } from "~/modules/utils";

export const loader: LoaderFunction = async ({ request }) => {
    try {
        await verifyAccessToken(request);

        const session = await getSession();
        session.unset("rToken");
        //await insertOnetoDb({ "by": username, "action": "logging out", "result": "succeded", "when": new Date().toISOString() }, "unnamed", "logs");
        return Response.json({ status: 200 }, { headers: { "Set-Cookie": await commitSession(session) } });
    }
    catch (error) {
        console.error("error while logging out", error);
        throw new Response("Internal server error", { status: 500 });
    }
}