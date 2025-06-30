import { createCookie } from "@remix-run/node";
import { MetaFunction } from "@remix-run/react";
import { count, search } from "./dbOnline";

export const JWT_REFRESH_KEY = "123!@#$@SDFASDAD";
export const JWT_ACCESS_KEY = "!#SDAS@#!!@XZZXC";

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
    username?: string,
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