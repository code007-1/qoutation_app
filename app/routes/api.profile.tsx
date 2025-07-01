import { ActionFunction } from "@remix-run/node";
import { update } from "~/modules/dbOnline";

export const action: ActionFunction = async ({ request, params }) => {
    const data = await request.json();

    const result = await update("unnamed", "users", { username: data.username }, { $set: data });
    if (result) {
        return new Response("profile updated", { status: 200 });
    }
    else
        return new Response("not authorized", { status: 403 });
}