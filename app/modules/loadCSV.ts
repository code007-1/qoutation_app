import fs from "fs";
import csv from "csv-parser";
export const rows: any[] = [];

export const loadDataPromise: Promise<any[]> = new Promise((resolve, reject) => {
    if (rows.length > 0) {
        console.log("CSV file already processed. Rows:", rows.length);
        resolve(rows);
        return;
    }

    fs.createReadStream("./assets/data.csv")
        .pipe(csv({ skipLines: 0, mapHeaders: ({ header }) => header.trim() }))
        .on("data", (row) => {
            rows.push(row);
        })
        .on("end", () => {
            console.log("CSV file successfully processed.");
            resolve(rows);
        })
        .on("error", (err) => {
            console.error("Error reading CSV file:", err);
            reject(err);
        });
});