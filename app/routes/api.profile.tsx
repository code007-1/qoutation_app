import { ActionFunction } from "@remix-run/node";
import { update } from "~/modules/dbOnline";
import { updateProfile } from "~/modules/utils";

export const action: ActionFunction = async ({ request, params }) => {
    const data = await request.json();
    try {
        const result = await update("unnamed", "users", { username: data.username }, { $set: data });
        if (result) {
            updateProfile(data);

            return new Response("profile updated", { status: 200 });
        }
        else
            return new Response("not authorized", { status: 403 });
    }
    catch (error) {
        console.error("error while updating profile : ", error);
        throw new Response("Internal server error", { status: 500 });
    }
}