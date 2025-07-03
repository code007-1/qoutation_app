import pkg from 'jsonwebtoken';
const { sign, verify } = pkg;

import { createCookie } from "@remix-run/node";
import { MetaFunction } from "@remix-run/react";
import { count, search } from "./dbOnline";
import { user } from "~/routes/dashboard.profile";

export const JWT_REFRESH_KEY = "123!@#$@SDFASDAD";
export const JWT_ACCESS_KEY = "!#SDAS@#!!@XZZXC";

export var profile: user = { address: "G-57, Vikas Marg, Near Metro Pillar No.41, \nDelhi - 110092", company: "Teen Telecommunication Pvt. Ltd.", contact: "+91 7065577059/60", email: "sales@teentelecommunication.com", pdfColor: "222" }

export function updateProfile(result: any) {
    profile.username = result.username;
    profile.contact = result.contact;
    profile.email = result.email;
    profile.website = result.website;
    profile.company = result.company;
    profile.address = result.address;
    profile.pdfColor = result.pdfColor;
}

// utitlity functions
const refresTokenCookie = createCookie('rToken', {
    httpOnly: true, // Prevent client-side accesss
    //secure: true, // Only send over HTTPS
    //sameSite: 'none', // For cross-site requests
    sameSite: 'lax',
    maxAge: 1000 * 60 * 60 * 24
});

export type loginData = {
    token?: string,
    qoute?: string
    profile: user
};

export type logoutData = {
    success: boolean | undefined,
};

export async function getQoute() {
    const len = await count("unnamed", "quotes") as number;
    var index = Math.floor(Math.random() * len);
    index = index < len ? index : len - 1
    const qoute = await search("unnamed", "quotes", {}, 1, index);
    if (qoute && qoute.length > 0) return qoute[0].qoute;
    else return "";
}

export async function verifyAccessToken(request: any) {
    const accessToken = request.headers.get("authorization")?.replace("Bearer ", "");

    if (!accessToken) {
        console.log("access token is missing: ");
        throw new Response("user not authorized", { status: 401 });
    }

    try {
        const verfied = verify(accessToken, JWT_ACCESS_KEY);
        if (verfied)
            return;
        throw new Response("user not authorized", { status: 401 });
    }
    catch (error) {
        console.log("error while checking access token : token malformed or expired");
        throw new Response("Internal server error", { status: 500 });
    }
}