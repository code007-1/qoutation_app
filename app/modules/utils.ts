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



export const meta: MetaFunction = () => {
    return [
        { title: "Unnamed" },
        { name: "description", content: "Welcome to Unnamed" },
    ];
};

export async function getAccessToken(setAccessToken: React.Dispatch<React.SetStateAction<string | undefined>>, setUserName: React.Dispatch<React.SetStateAction<string | undefined>>) {
    try {
        const result = await fetch("/api/refresh/");
        if (result.status === 200) {
            const details = await result.json();
            setAccessToken(details.token); // Store the fetched data in state
            setUserName(details.data?.username);

        }
    }
    catch (error) {
        console.log("error", error);
    }
}

export type loginData = {
    token?: string,
    username?: string,
};

export type logoutData = {
    success: boolean | undefined,
};