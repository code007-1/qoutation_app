import { ActionFunction } from "@remix-run/node";
import { insertOnetoDb, update } from "~/modules/dbOnline";
import { dbName, logsCollectionName, updateProfile, usersCollectionName, verifyAccessToken } from "~/modules/utils";

export const action: ActionFunction = async ({ request, params }) => {
    try {
        await verifyAccessToken(request);
        const data = await request.json();

        const result = await update(dbName, usersCollectionName, { username: data.username }, { $set: data });
        if (result) {
            updateProfile(data);
            await insertOnetoDb({ "by": data.username, "action": "profile update", "result": "scceded", "when": new Date().toISOString() }, dbName, logsCollectionName);
            return new Response("Profile updated", { status: 200 });
        }
        else {
            await insertOnetoDb({ "by": data.username, "action": "profile update", "result": "username not found", "when": new Date().toISOString() }, dbName, logsCollectionName);
            return new Response("Username not found", { status: 404 });
        }
    }
    catch (error) {
        console.error("error while updating profile : ", error);
        throw new Response("Internal server error", { status: 500 });
    }
}