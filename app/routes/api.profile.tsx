import { ActionFunction } from "@remix-run/node";
import { update } from "~/modules/dbOnline";
import { updateProfile, verifyAccessToken } from "~/modules/utils";

export const action: ActionFunction = async ({ request, params }) => {
    try {
        await verifyAccessToken(request);
        const data = await request.json();

        const result = await update("unnamed", "users", { username: data.username }, { $set: data });
        if (result) {
            updateProfile(data);

            return new Response("Profile updated", { status: 200 });
        }
        else
            return new Response("Username not found", { status: 404 });
    }
    catch (error) {
        console.error("error while updating profile : ", error);
        throw new Response("Internal server error", { status: 500 });
    }
}