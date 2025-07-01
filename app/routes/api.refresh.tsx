import { json, LoaderFunctionArgs } from "@remix-run/node";
import pkg, { decode } from 'jsonwebtoken';
const { sign, verify } = pkg;
import { commitSession, getSession } from "~/modules/sessions";
import { JWT_ACCESS_KEY, JWT_REFRESH_KEY } from "~/modules/utils";

async function verifyRefreshToken(cookies: string, hostip: string, userAgent: string): Promise<boolean | {}> {
    const session = await getSession(cookies);
    const rToken = session.get("rToken");

    if (!rToken) {
        console.log("refresh token is missing");
        return false;
    }

    try {
        const decoded = verify(rToken as string, JWT_REFRESH_KEY);
        if ((decoded as any)["userip"] === hostip && (decoded as any)["userAgent"] === userAgent) {
            return { username: (decoded as any)["username"], contact: (decoded as any)["contact"], email: (decoded as any)["email"], website: (decoded as any)["website"], company: (decoded as any)["company"], address: (decoded as any)["address"], pdfColor: (decoded as any)["pdfColor"] };//{ token: access, username: (decoded as any)["username"] };
        }
        console.log("refresh token isn't matching");
        return false;
    }
    catch (error) {
        console.log("error while checking refresh token : token malformed or expired");
        return false;
    }
}

export async function loader({ request, params }: LoaderFunctionArgs) {
    const cookies = request.headers.get("cookie");
    const url = new URL(request.url);
    const userAgent = request.headers.get("user-agent");

    if (cookies) {
        const verified = await verifyRefreshToken(cookies, url.host, userAgent ? userAgent : "");

        if (verified !== false && typeof (verified) !== "boolean") {
            const ip = new URL(request.url);
            const data = {
                time: Date(),
                userip: ip.host,
                userAgent: request.headers.get("user-agent"),
                ...verified
            }

            const access = sign(data, JWT_ACCESS_KEY, { expiresIn: "10m" });
            return Response.json({ token: access, profile: verified });
        }

        const session = await getSession();
        session.unset("loggedIn");
        session.unset("rToken");

        return new Response("not authorized", { status: 403, headers: { "Set-Cookie": await commitSession(session) } });
    }
    return new Response("not authorized", { status: 403 });
}