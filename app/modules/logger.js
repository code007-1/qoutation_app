/*import winston from "winston";

export const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or higher to `error.log`
        //   (i.e., error, fatal, but not other levels)
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        //
        // - Write all logs with importance level of `info` or higher to `combined.log`
        //   (i.e., fatal, error, warn, and info, but not trace)
        //
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

import crypto from 'crypto';
//const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32); // Store this securely!
const iv = crypto.randomBytes(16);  // Initialization vector

console.log("iv : ", iv);

function encrypt(text) {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return { iv: iv.toString('hex'), encryptedData: encrypted };
}

function decrypt(encryptedObj) {
    const decipher = crypto.createDecipheriv(
        algorithm,
        key,
        Buffer.from(encryptedObj.iv, 'hex')
    );
    let decrypted = decipher.update(encryptedObj.encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// Example usage
const encrypted = encrypt('Sensitive Info');
console.log('Encrypted:', encrypted);

const decrypted = decrypt(encrypted);
console.log('Decrypted:', decrypted);

*/

import { MongoClient, ServerApiVersion } from "mongodb";
import { writeFileSync } from "fs";

const uri = "mongodb+srv://spttcpl:9ziRq5mLRppCobx8@cluster0.bbixzsn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


async function load() {
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("unnamed").command({ ping: 1 });

    let data = await client.db("unnamed").collection("quotations").find({}).toArray();//{ name: { $regex: query, $options: "i" } }
    data = data.map((d) => {
        const avgdiscount = d.items.reduce((acc, item) => acc + (item.discount ?? 0), 0) / (d.items.length || 1);
        const avgaddon = d.items.reduce((acc, item) => acc + (item.addon ?? 0), 0) / (d.items.length || 1);
        return { ...d, avgdiscount: Number(avgdiscount.toFixed(2)), avgaddon: Number(avgaddon.toFixed(2)) };
    });

    // Write data to JSON file
    //writeFileSync("quotations.json", JSON.stringify(data, null, 2));



    // Prepare bulk operations for all documents
    const bulkOps = data.map(d => {
        const { _id, ...restData } = d;
        return {
            updateOne: {
                filter: { no: d.no },
                update: { $set: { ...restData } },
                upsert: true
            }
        };
    });

    if (bulkOps.length > 0) {
        const result = await client.db("unnamed").collection("quotations").bulkWrite(bulkOps);
        console.log("Bulk operation result:", result);
    }

    client.close();
}

load();