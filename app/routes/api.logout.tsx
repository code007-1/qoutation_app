import { ActionFunction } from "@remix-run/node";
import { commitSession, getSession } from "~/modules/sessions";

export const action: ActionFunction = async ({ request }) => {
    //const refreshToken = request.headers.get("cookie");
    const url = new URL(request.url);
    //verifyAccess(refreshToken ? refreshToken : "", url.host)

    try {
        const session = await getSession();
        session.unset("rToken");

        return Response.json({ success: true }, { headers: { "Set-Cookie": await commitSession(session) } });
    }
    catch (error) {
        console.error("Internal Server Error while logging out", error);
        throw new Response("Internal server error", { status: 500 });
    }
}