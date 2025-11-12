import { ActionFunction } from "@remix-run/node";
import { getCachedSerials } from "~/modules/utils";

export const action: ActionFunction = async ({ request }) => {
    try {
        const { query, no } = await request.json();
        const serials = await getCachedSerials(no);

        if (serials.length > 0) {
            // Filter rows based on the query
            const filteredRows = serials.filter((row: any) => {
                try { return row.toLowerCase().includes(query.toLowerCase()); }
                catch (error) { console.log("error while searching in through serials", row); }
            });

            // finally create the Response with the correct Content-Type header for a PDF
            const headers = new Headers({ "Content-Type": "application/json" });
            return new Response(JSON.stringify(filteredRows), { status: 200, headers });
        }
    }

    catch (error) {
        console.log("error while searching serial number : ", error);
        return new Response("error occured while searching serial numbers", { status: 500 });
    }
};