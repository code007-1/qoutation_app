import { ActionFunction } from "@remix-run/node";
import { insertOnetoDb, search, update } from "~/modules/dbOnline";
import bcrypt from "bcrypt";
import { verifyAccessToken } from "~/modules/utils";

export const action: ActionFunction = async ({ request, params }) => {
    try {
        await verifyAccessToken(request);
        const formdata = await request.formData() as any;
        const p0 = formdata.get("currentPassword") as string;
        const p1 = formdata.get("newPassword") as string;
        const p2 = formdata.get("repeatPassword") as string;
        const username = formdata.get("username") as string;

        const result = await search("unnamed", "users", { username: username }, 1, 0);

        if (result && result.length > 0) {
            const verified = await bcrypt.compare(p0, result[0].password);

            if (verified) {
                const newPassword = await bcrypt.hash(p1, 11);
                const result = await update("unnamed", "users", { username: username }, { $set: { password: newPassword } });
                if (result) {
                    await insertOnetoDb({ "by": username, "action": "password change", "result": "succeded", "when": new Date().toISOString() }, "unnamed", "logs");
                    return new Response("Profile updated", { status: 200 });
                }
            }
            await insertOnetoDb({ "by": username, "action": "password change", "result": "wrong old password", "when": new Date().toISOString() }, "unnamed", "logs");
            return new Response("Wrong old password", { status: 404 });
        }
        await insertOnetoDb({ "by": username, "action": "password change", "result": "username not found", "when": new Date().toISOString() }, "unnamed", "logs");
        return new Response("Username not found", { status: 404 });
    }
    catch (error) {
        console.log("error while updating password : ", error);
        throw new Response("Internal server error", { status: 500 });
    }
}