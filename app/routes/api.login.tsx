/*import { ActionFunction, createCookie, json } from "@remix-run/node";
import pkg from 'jsonwebtoken';
import { search } from "~/modules/dbOnline";
import { commitSession, getSession } from "~/modules/sessions";
const { sign } = pkg;
import bcrypt from "bcrypt";

//const bcrypt = require('bcrypt');

const JWT_REFRESH_KEY = "123!@#$@SDFASDAD";
const JWT_ACCESS_KEY = "!#SDAS@#!!@XZZXC";

const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

// utitlity functions
export const refresTokenCookie = createCookie('rToken', {
    httpOnly: true, // Prevent client-side accesss
    //secure: true, // Only send over HTTPS
    //sameSite: 'none', // For cross-site requests
    sameSite: 'lax',
    maxAge: 1000 * 60 * 60 * 24
});


export const action: ActionFunction = async ({ request, params }) => {
    const formData = await request.formData();
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    const result = await search(db { "username": username });

    bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
        // Store hash in your password DB.
    });


    //if (result.password)

    const ip = new URL(request.url);

    const data = {
        time: Date(),
        username: username,
        userip: ip.host,
        userAgent: request.headers.get("user-agent")
    }

    const refresh = sign(data, JWT_REFRESH_KEY, { expiresIn: "1d" });
    const access = sign(data, JWT_ACCESS_KEY, { expiresIn: "10m" });

    const cookieValue = await refresTokenCookie.serialize(refresh);
    console.log("logging in");

    let session = await getSession();
    session.set("loggedIn", true);
    session.set("rToken", refresh);

    return Response.json({ token: access, username: getUserName() }, { headers: { "Set-Cookie": await commitSession(session) } });
}*/