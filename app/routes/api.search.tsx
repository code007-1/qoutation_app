import { ActionFunction } from "@remix-run/node";
import { rows } from "~/modules/loadCSV";


export const action: ActionFunction = async ({ request }) => {
    const query = await request.json();
    if (rows.length === 0) {
        return new Response(JSON.stringify({ error: "No data available" }), { status: 200 });
    }
    else {
        console.log("query is : ", query.toLowerCase(), rows["name"].toLowerCase());
        // Filter rows based on the query
        const filteredRows = rows.filter((row: any) => {
            return row.name.toLowerCase().includes(query.toLowerCase());
        });

        //console.log("Filtered rows:", filteredRows);
        // finally create the Response with the correct Content-Type header for a PDF
        const headers = new Headers({ "Content-Type": "application/json" });
        return new Response(JSON.stringify([...filteredRows]), { status: 200, headers });
    }
};