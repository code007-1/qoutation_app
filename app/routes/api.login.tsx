import { ActionFunction, createCookie, json } from "@remix-run/node";
import { count, search } from "~/modules/dbOnline";
import { commitSession, getSession } from "~/modules/sessions";

import pkg from 'jsonwebtoken';
const { sign } = pkg;
import bcrypt from "bcrypt";
import { getQoute, JWT_ACCESS_KEY, JWT_REFRESH_KEY, profile, updateProfile } from "~/modules/utils";

export const action: ActionFunction = async ({ request, params }) => {
    const formData = await request.formData();
    const username = (formData.get("username") as string).trim().toLowerCase();
    const password = formData.get("password") as string;

    try {
        const result = await search("unnamed", "users", { username: username }, 1, 0);

        if (result && result.length > 0) {
            const verified = await bcrypt.compare(password, result[0].password);//"$2b$11$8lTICnLuucL1CRQXZ.g.s.xlwzpxivlUbdDcwj60oEqrapJ5k/Lde"

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
                    const qoute = await getQoute();
                    response = { token: access, profile: profile, qoute: qoute };
                }
                else { response = { token: access, profile: profile }; }

                return Response.json(response, { headers: { "Set-Cookie": await commitSession(session) } });
            }
            return new Response("User not registered", { status: 401 });
        }
        return new Response("User not registered", { status: 401 });
    }
    catch (error) {
        console.error("error while logging in : ", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}