import { ActionFunction, json } from "@remix-run/node";
import { insertOnetoDb, search } from "~/modules/dbOnline";
import { commitSession, getSession } from "~/modules/sessions";

import pkg from 'jsonwebtoken';
const { sign } = pkg;
import bcrypt from "bcrypt";
import { getQoute, JWT_ACCESS_KEY, JWT_REFRESH_KEY, userProfile, updateProfile } from "~/modules/utils";

export const action: ActionFunction = async ({ request, params }) => {
    try {
        const formData = await request.formData();
        const username = (formData.get("username") as string).trim().toLowerCase();
        const password = formData.get("password") as string;

        const result = await search("unnamed", "users", { username: username }, 1, 0);

        if (result && result.length > 0) {
            const verified = await bcrypt.compare(password, result[0].password);
            if (verified) {
                const ip = new URL(request.url);

                const data = {
                    time: Date(),
                    userip: ip.host,
                    userAgent: request.headers.get("user-agent"),
                    username: username
                }

                const refresh = sign(data, JWT_REFRESH_KEY, { expiresIn: "1d" });
                const access = sign(data, JWT_ACCESS_KEY, { expiresIn: "10m" });

                //const cookieValue = await refresTokenCookie.serialize(refresh);

                let session = await getSession();
                session.set("rToken", refresh);

                updateProfile(result[0]);
                var response = {};
                if (username === "gunjan") {
                    const quote = await getQoute();
                    response = { token: access, profile: userProfile, quote: quote };
                }
                else { response = { token: access, profile: userProfile }; }
                await insertOnetoDb({ "by": username, "action": "logging in", "result": "succeded", "when": new Date().toISOString() }, "unnamed", "logs");
                return Response.json(response, { headers: { "Set-Cookie": await commitSession(session) } });
            }
            await insertOnetoDb({ "by": username, "action": "logging in", "result": "wrong password", "when": new Date().toISOString() }, "unnamed", "logs");
            return new Response("Wrong password", { status: 404 });
        }
        await insertOnetoDb({ "by": username, "action": "logging in", "result": "user not found", "when": new Date().toISOString() }, "unnamed", "logs");
        return new Response("User not found", { status: 404 });
    }
    catch (error) {
        console.error("error while logging in : ", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}