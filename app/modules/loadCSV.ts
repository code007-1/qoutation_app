import fs from "fs";
import csv from "csv-parser";
import { search } from "./dbOnline";
import { dbName, metaCollectionName, productCollectionName } from "./utils";
import { writeFile } from "fs/promises";

export let products: Record<string, {}> = {};
export let productsCount: number = 0;

//loads data from either csv file or from database, if local data is old
export async function loadProductsDataPromise() {
    try {
        const version = await search(dbName, metaCollectionName);
        const local_version = fs.readFileSync("./assets/product_catelog_version.txt").toString();
        if (!local_version || local_version != version[0]["product_catelog_version"]) {
            const loadedProducts = await search(dbName, productCollectionName, {}, {}, 100000);
            if (loadedProducts.length > 0) {
                productsCount = 0;
                products = {};

                let csvData = "no,name,description,hsn,price,quantity,link,group,version\n";

                loadedProducts.map((product: any) => {
                    const escape = (text: string) => `"${String(text).replace(/"/g, '\'')}"`; // Escape double quotes too
                    csvData += escape(product.no) + "," + escape(product.name) + "," + escape(product.description) + "," + escape(product.hsn) + "," + escape(product.price) + "," + escape(product.quantity) + "," + escape(product.link) + "," + escape(product.group) + "," + escape(product.version) + "\n";
                    products[product.no] = { ...product };
                    productsCount += 1;
                })
                csvData.trimEnd();
                await writeFile("./assets/data.csv", csvData);
                await writeFile("./assets/product_catelog_version.txt", String(version[0]["product_catelog_version"]));
            }
        }

        if (productsCount > 0) {
            //console.log("CSV file already processed having Rows:", productsCount);
            return;
        }

        return new Promise<void>(async (resolve, reject) => {
            fs.createReadStream("./assets/data.csv")
                .pipe(csv({ skipLines: 0, mapHeaders: ({ header }) => header.trim() }))
                .on("data", (row) => {
                    products[row.no] = { ...row };
                    productsCount += 1;
                })
                .on("end", () => {
                    console.log("CSV file processed having Rows:", productsCount);
                    resolve();
                })
                .on("error", (err) => {
                    console.error("Error reading CSV file:", err);
                    reject(err);
                });
        });
    }
    catch (error) {
        console.log("error loading products data : ", error);
    }
};

//loadProductsDataPromise();