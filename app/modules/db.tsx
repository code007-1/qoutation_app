/*import { MongoClient } from "mongodb";

const uri = "mongodb+srv://ttcplhelpdesk:<db_password>@cluster0.fvsd2fl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
await client.connect();
const db = client.db("yourDatabase");
const collection = db.collection("yourCollection");

export async function searchItems(query: string) {
    return await collection.find({ name: { $regex: query, $options: "i" } }).limit(10).toArray();
}*/

import fs from "fs";
import csv from 'csv-parser';
export const rows: any = [];

function LoadData() {
    /*if (!fs.existsSync('./app/modules/data.csv')) {
        console.error("CSV file not found. Please ensure 'data.csv' exists in the current directory.");
        return;
    }*/

    if (rows.length > 0) {
        console.log("CSV file already processed. Rows:", rows.length);
        return;
    }

    else {
        fs.createReadStream('./app/modules/data.csv') // Replace 'file.csv' with your file path
            .pipe(csv())
            .on('data', (row) => {
                //console.log(row); // Each row is an object
                rows.push(row);
            })
            .on('end', () => {
                console.log('CSV file successfully processed.');
                console.log(rows);
            });
    }
}
LoadData();