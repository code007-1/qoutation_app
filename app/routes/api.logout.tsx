import { LoaderFunction } from "@remix-run/node";
//import { insertOnetoDb, insertOrUpdateOnetoDb } from "~/modules/dbOnline";
import { commitSession, getSession } from "~/modules/sessions";

export const loader: LoaderFunction = async ({ request }) => {
    try {
        //const refreshToken = request.headers.get("cookie");
        const url = new URL(request.url);
        //verifyAccess(refreshToken ? refreshToken : "", url.host)


        const session = await getSession();
        session.unset("rToken");
        //await insertOnetoDb({ "by": username, "action": "logging in", "result": "succeded", "when": new Date().toISOString() }, "unnamed", "logs");
        return Response.json({ status: 200 }, { headers: { "Set-Cookie": await commitSession(session) } });
    }
    catch (error) {
        console.error("error while logging out", error);
        throw new Response("Internal server error", { status: 500 });
    }
}