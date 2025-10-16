import pkg from "jsonwebtoken";
const { verify } = pkg;

import { count, search } from "./dbOnline";
import { profile } from "~/routes/dashboard.settings.profile";

export const JWT_REFRESH_KEY = "123!@#$@SDFASDAD";
export const JWT_ACCESS_KEY = "!#SDAS@#!!@XZZXC";
export const localStringFormat = "en-IN";

export const quotationCollectionName = "quotations";
export const challanCollectionName = "challans";
export const complaintCollectionName = "complaints";
export const logsCollectionName = "logs";
export const quotesCollectionName = "quotes";
export const usersCollectionName = "users";
export const dbName = "unnamed";
export const dburi = "mongodb+srv://spttcpl:9ziRq5mLRppCobx8@cluster0.bbixzsn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


export var userProfile: profile = { generalInfo: [{ contact: "+91 7065577059/60", address: "G-57, Vikas Marg, Near Metro Pillar No.41, \nDelhi - 110092", company: "Teen Telecommunication Pvt. Ltd.", website: "https://teentelecommunication.com", email: "sales@teentelecommunication.com" }], quotationInfo: [{ pdfColor: "222", showCustomerList: true }] };

export function updateProfile(result: any) {
    userProfile.username = result.username;
    userProfile.generalInfo = result.generalInfo;
    userProfile.quotationInfo = result.quotationInfo;
}

export type loginData = {
    token?: string,
    quote?: string
    profile: profile
    permissions: string
};

export type logoutData = {
    success: boolean | undefined,
};

export async function getQoute() {
    const len = await count("unnamed", "quotes") as number;
    //console.log("len of quotes", len);
    var index = Math.floor(Math.random() * len);
    //console.log("index of quotes", index);
    index = index < len ? index : len - 1
    //console.log("index of quotes again", index);
    const quote = await search("unnamed", "quotes", {}, 1, index);
    if (quote && quote.length > 0) return quote[0].quote;
    else return "";
}

export async function verifyAccessToken(request: any) {
    const accessToken = request.headers.get("authorization")?.replace("Bearer ", "");

    if (!accessToken) {
        console.log("access token is missing: ", request.headers);
        throw new Response("user not authorized", { status: 401 });
    }

    try {
        const verfied = verify(accessToken, JWT_ACCESS_KEY);
        if (verfied) {
            return (verfied as { permissions: string })?.permissions;
        }
        throw new Response("user not authorized", { status: 401 });
    }
    catch (error) {
        console.log("error while checking access token : token malformed or expired");
        throw new Response("Internal server error", { status: 401 });
    }
}


function rgb_to_hsv(r: number, g: number, b: number) {

    // R, G, B values are divided by 255
    // to change the range from 0..255 to 0..1
    r = r / 255.0;
    g = g / 255.0;
    b = b / 255.0;

    // h, s, v = hue, saturation, value
    var cmax = Math.max(r, Math.max(g, b)); // maximum of r, g, b
    var cmin = Math.min(r, Math.min(g, b)); // minimum of r, g, b
    var diff = cmax - cmin; // diff of cmax and cmin.
    var h = -1, s = -1;

    // if cmax and cmin are equal then h = 0
    if (cmax == cmin)
        h = 0;

    // if cmax equals r then compute h
    else if (cmax == r)
        h = (60 * ((g - b) / diff) + 360) % 360;

    // if cmax equals g then compute h
    else if (cmax == g)
        h = (60 * ((b - r) / diff) + 120) % 360;

    // if cmax equals b then compute h
    else if (cmax == b)
        h = (60 * ((r - g) / diff) + 240) % 360;

    // if cmax equals zero
    if (cmax == 0)
        s = 0;
    else
        s = (diff / cmax) * 100;

    // compute v
    var v = cmax * 100;
    return { h: h, s: s, v: v }
}