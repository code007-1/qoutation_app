import { LoaderFunctionArgs } from "@remix-run/node";
import pkg from "jsonwebtoken";
import { search } from "~/modules/dbOnline";
const { sign, verify } = pkg;
import { commitSession, getSession } from "~/modules/sessions";
import { JWT_ACCESS_KEY, JWT_REFRESH_KEY, userProfile, updateProfile, dbName, usersCollectionName } from "~/modules/utils";

async function verifyRefreshToken(cookies: string, hostip: string, userAgent: string): Promise<boolean | { username: string, permissions: string }> {
    const session = await getSession(cookies);
    const rToken = session.get("rToken");

    if (!rToken) {
        console.log("refresh token is missing");
        return false;
    }

    try {
        const decoded = verify(rToken as string, JWT_REFRESH_KEY);
        if ((decoded as any)["userip"] === hostip && (decoded as any)["userAgent"] === userAgent) {
            return { username: (decoded as any)["username"], permissions: (decoded as any)["permissions"] };
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

    try {

        if (cookies) {
            const verified = await verifyRefreshToken(cookies, url.host, userAgent ? userAgent : "");

            if (verified !== false) {
                const ip = new URL(request.url);
                const data = {
                    time: Date(),
                    userip: ip.host,
                    userAgent: request.headers.get("user-agent"),
                    username: (verified as any)["username"],
                    permissions: (verified as any)["permissions"],
                }
                const result = await search(dbName, usersCollectionName, { username: verified }, 1, 0);

                if (result && result.length > 0)
                    updateProfile(result[0]);

                const access = sign(data, JWT_ACCESS_KEY, { expiresIn: "10m" });
                return Response.json({ token: access, profile: userProfile, permissions: (verified as any)["permissions"] });
            }

            const session = await getSession();
            session.unset("rToken");

            return new Response("Not authorized", { status: 403, headers: { "Set-Cookie": await commitSession(session) } });
        }
        return new Response("Not authorized", { status: 403 });
    }
    catch (error) {
        console.error("error while getting new access token using refresh token : ", error);
        const session = await getSession();
        session.unset("rToken");
        return new Response("Internal server error", { status: 500, headers: { "Set-Cookie": await commitSession(session) } });
    }
}