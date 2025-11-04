import { ActionFunction } from "@remix-run/node";
import { products, productsCount } from "~/modules/loadProducts";

export const action: ActionFunction = async ({ request }) => {
    const query = await request.json();

    if (productsCount === 0) {
        return new Response(JSON.stringify({ error: "No data available" }), { status: 200 });
    }
    else {
        // Filter rows based on the query
        const filteredRows = Object.values(products).filter((row: any) => {
            try { return row.name.toLowerCase().includes(query.toLowerCase()); }
            catch (error) {
                console.log("error while searching in csv file", row.name);
            }
        });

        // finally create the Response with the correct Content-Type header for a PDF
        const headers = new Headers({ "Content-Type": "application/json" });
        return new Response(JSON.stringify(filteredRows), { status: 200, headers });
    }
};