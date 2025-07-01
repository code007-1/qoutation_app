import { ActionFunction } from "@remix-run/node";
import { search, update } from "~/modules/dbOnline";
import bcrypt from "bcrypt";

export const action: ActionFunction = async ({ request, params }) => {
    const formdata = await request.formData() as any;
    const p0 = formdata.get("currentPassword") as string;
    const p1 = formdata.get("newPassword") as string;
    const p2 = formdata.get("repeatPassword") as string;
    const username = formdata.get("username") as string;


    try {
        const result = await search("unnamed", "users", { username: username }, 1, 0);
        console.log("result", p0, p1, p2, username, result);

        if (result && result.length > 0) {
            const verified = await bcrypt.compare(p0, result[0].password);
            const newPassword = await bcrypt.hash(p1, 11);

            if (verified) {
                const result = await update("unnamed", "users", { username: username }, { $set: { password: newPassword } });
                if (result)
                    return new Response("profile updated", { status: 200 });
                return new Response("not authorized", { status: 403 });
            }
            return new Response("not authorized", { status: 403 });
        }
        return new Response("username not found, not authorised", { status: 403 });
    }
    catch (error) {
        console.log("error while updating password : ", error);
        throw new Response("Internal server error", { status: 500 });
    }
}