import { ActionFunction } from "@remix-run/node";
import { update } from "~/modules/dbOnline";
import { profile } from "~/modules/utils";

export const action: ActionFunction = async ({ request, params }) => {
    const data = await request.json();

    const result = await update("unnamed", "users", { username: data.username }, { $set: data });
    if (result) {
        profile.username = data.username;
        profile.contact = data.contact;
        profile.email = data.email;
        profile.website = data.website;
        profile.company = data.company;
        profile.address = data.address;
        profile.pdfColor = data.pdfColor;

        return new Response("profile updated", { status: 200 });
    }
    else
        return new Response("not authorized", { status: 403 });
}