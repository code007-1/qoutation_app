import fs from "fs";
import csv from "csv-parser";
import { search } from "./dbOnline";
import { dbName, metaCollectionName, productCollectionName } from "./utils";
import { writeFile } from "fs/promises";
import { ProductsData } from "~/routes/dashboard.inventory.products.create";

export let products: Record<string, ProductsData> = {};
export let productsCount: number = 0;

async function loadCSV() {
    await new Promise<void>(async (resolve, reject) => {
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

//loads data from either csv file or from database, if local data is old
export async function loadProductsDataPromise() {
    try {
        const version = await search(dbName, metaCollectionName);
        const local_version = fs.readFileSync("./assets/product_catelog_version.txt").toString();

        // check if anything has changed in products
        if (!local_version || local_version != version[0]["product_catelog_version"]) {
            // if we don't have loaded product from csv, load it then
            if (productsCount == 0)
                await loadCSV();

            // now loads versions of all products from db 
            const versions = await search(dbName, productCollectionName, {}, { "projection": { "version": 1, "no": 1 } }, 100000);
            const difference: number[] = [];

            // compare all product's version for change 
            versions.forEach(element => {
                if (!(element.no in products) || products[element.no].version == element.version)
                    difference.push(element.no);
            });

            // load products whose version changed from db
            const loadedProducts = await search(dbName, productCollectionName, { "no": { "$in": difference } }, {}, 100000);

            if (loadedProducts.length > 0) {
                productsCount = 0;

                // update with new loaded products information
                loadedProducts.map((product: any) => {
                    products[product.no] = { ...product };
                    productsCount += 1;
                })

                // remove those products which have been deleted
                products = Object.fromEntries(Object.entries(products).filter(([key]) => (key in versions)));

                // save to csv file
                let csvData = "no,name,description,hsn,price,quantity,link,group,version\n";
                Object.values(products).sort((a, b) => a.no - b.no).forEach((product: any) => {
                    const escape = (text: string) => `"${String(text).replace(/"/g, '\'')}"`; // Escape double quotes too
                    csvData += escape(product.no) + "," + escape(product.name) + "," + escape(product.description) + "," + escape(product.hsn) + "," + escape(product.price) + "," + escape(product.quantity) + "," + escape(product.link) + "," + escape(product.group) + "," + escape(product.version) + "\n";
                });

                csvData.trimEnd();
                await writeFile("./assets/data.csv", csvData);
                await writeFile("./assets/product_catelog_version.txt", String(version[0]["product_catelog_version"]));
            }
        }

        if (productsCount > 0) {
            //console.log("CSV file already processed having Rows:", productsCount);
            return;
        }
        else await loadCSV();
    }
    catch (error) {
        console.log("error loading products data : ", error);
    }
};

//loadProductsDataPromise();