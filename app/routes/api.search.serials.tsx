import { ActionFunction } from "@remix-run/node";
import { getCachedSerials } from "~/modules/utils";

export const action: ActionFunction = async ({ request }) => {
    const { query, no } = await request.json();
    const serials = await getCachedSerials(no);

    if (serials.length > 0) {
        // Filter rows based on the query
        const filteredRows = serials.filter((row: any) => {
            try { return row.name.toLowerCase().includes(query.toLowerCase()); }
            catch (error) { console.log("error while searching in csv file", row.name); }
        });

        // finally create the Response with the correct Content-Type header for a PDF
        const headers = new Headers({ "Content-Type": "application/json" });
        return new Response(JSON.stringify(filteredRows), { status: 200, headers });
    }
};