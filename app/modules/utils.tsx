import { createCookie } from "@remix-run/node";
import { MetaFunction } from "@remix-run/react";

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

