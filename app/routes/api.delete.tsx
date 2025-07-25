import { ActionFunction } from "@remix-run/node";
import { deleteOneFromDB, insertOrUpdateOnetoDb, search, update } from "~/modules/dbOnline";
import bcrypt from "bcrypt";
import { verifyAccessToken } from "~/modules/utils";

export const action: ActionFunction = async ({ request, params }) => {
    try {
        await verifyAccessToken(request);
        const no = await request.json();
        const result = await deleteOneFromDB(no);
        return new Response("Quotation deleted", { status: 200 });
    }
    catch (error) {
        console.log("error while deleting quotation data : ", error);
        throw new Response("Error while deleting quotation data", { status: 500 });
    }
}