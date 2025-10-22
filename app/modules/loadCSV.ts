import fs from "fs";
import csv from "csv-parser";
import { search } from "./dbOnline";
import { dbName, metaCollectionName, productCollectionName } from "./utils";
import { writeFile } from "fs/promises";

export let products: Record<string, {}> = {};
export let productsCount: number = 0;

//loads data from either csv file or from database, if local data is old
export async function loadProductsDataPromise() {
    new Promise(async (resolve, reject) => {
        try {
            const version = await search(dbName, metaCollectionName);
            const local_version = fs.readFileSync("./assets/product_catelog_version.txt").toString();

            if (!local_version || local_version != version[0]["product_catelog_version"]) {
                const loadedProducts = await search(dbName, productCollectionName, {}, {}, 100000);
                console.log("her");
                if (loadedProducts.length > 0) {
                    productsCount = 0;
                    products = {};

                    let csvData = "productid, name, description, hsn, price, link\n";

                    loadedProducts.map((product: any) => {
                        const escape = (text: string) => `"${String(text).replace(/"/g, '\'')}"`; // Escape double quotes too
                        csvData += escape(product.productid) + "," + escape(product.name) + "," + escape(product.description) + "," + escape(product.hsn) + "," + escape(product.price) + "," + escape(product.link) + "\n";
                        products[product.productid] = { ...product };
                        productsCount += 1;
                    })
                    csvData.trimEnd();
                    writeFile("./assets/data.csv", csvData).then(() => writeFile("./assets/product_catelog_version.txt", String(version[0]["product_catelog_version"])));
                }
            }

            if (productsCount > 0) {
                console.log("CSV file already processed having Rows:", productsCount);
                resolve(products);
            }

            fs.createReadStream("./assets/data.csv")
                .pipe(csv({ skipLines: 0, mapHeaders: ({ header }) => header.trim() }))
                .on("data", (row) => {
                    products[row.productid] = { ...row };
                    productsCount += 1;
                })
                .on("end", () => {
                    console.log("CSV file processed having Rows:", productsCount);
                    resolve(products);
                })
                .on("error", (err) => {
                    console.error("Error reading CSV file:", err);
                    reject(err);
                });
        }
        catch (error) {
            console.log("error loading products data : ", error);
        }
    })
};

//loadProductsDataPromise();