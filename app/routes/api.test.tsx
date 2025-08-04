/*import bcrypt from "bcrypt";

bcrypt.hash("12345", 11, (err, hash) => {
    console.log(hash);
})*/

import { renderToStream } from "@react-pdf/renderer";
import { LoaderFunction } from "@remix-run/node";
import ChallanPDFDocument from "~/component/ChallanPDFDcoument";


//export let loader: LoaderFunction = async ({ request, params }) => {
export const loader: LoaderFunction = async () => {

    const stream = await renderToStream(<ChallanPDFDocument />);

    const body = await new Promise<Buffer>((resolve, reject) => {
        const buffers: Uint8Array[] = [];
        stream.on('data', (data) => buffers.push(data));
        stream.on('end', () => resolve(Buffer.concat(buffers)));
        stream.on('error', reject);
    });

    return new Response(body, {
        status: 200,
        headers: { 'Content-Type': 'application/pdf' },
    });
};