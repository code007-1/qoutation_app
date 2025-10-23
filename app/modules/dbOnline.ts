// how category and type is saving to db and convert sno to array
import { ChangeStream, MongoClient, ServerApiVersion } from "mongodb";
import { dbName, mongoDBUrl, productCollectionName, purchaseInvoiceCollectionName, quotationCollectionName, usersCollectionName } from "./utils";

const uri = mongoDBUrl;//"mongodb+srv://spttcpl:9ziRq5mLRppCobx8@cluster0.bbixzsn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//let changeStream: ChangeStream | null;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function isMongoConnected() {
    try {
        await client.db(dbName).command({ ping: 1 });
        return true;
    } catch (err) {
        return false;
    }
}

async function run() {
    try {
        const tf = await isMongoConnected();
        //check if already connected
        if (!tf) {
            // Connect the client to the server	(optional starting in v4.7)
            await client.connect();
            // Send a ping to confirm a successful connection
            await client.db(dbName).command({ ping: 1 });
            console.log("Pinged your deployment. You successfully connected to MongoDB!");
        }
    }
    catch (error) {
        throw console.error("Error connecting to MongoDB:", error);
    }
}

/*async function startChangeStream() {
    await run();
    if (!changeStream)
        changeStream = client.db(dbName).collection(productCollectionName).watch<ProductsData>([], { fullDocument: 'updateLookup' });

    if (changeStream.listeners("change").length > 0)
        return;

    changeStream.on('change', (change: any) => {
        if (change.fullDocument?.productid) {
            products[change.fullDocument.productid] = change.fullDocument;
        }
    });

    changeStream.on('error', (err) => {
        console.error('Stream error:', err);
        setTimeout(startChangeStream, 5000); // Retry after 5s
    });

    changeStream.on('close', () => {
        console.warn('Stream closed');
        setTimeout(startChangeStream, 5000);
    });
}
startChangeStream();*/

// searches for query in db
export async function search(db: string = dbName, collection: string = quotationCollectionName, query: {} = {}, filterOptions: {} = {}, limit: number = 10, skip: number = 0) {
    try {
        await run();
        return await client.db(db).collection(collection).find(query, filterOptions).skip(skip).limit(limit).toArray();//{ name: { $regex: query, $options: "i" } }
    }
    catch (error) { throw console.error("error while saerching in db : ", error); }
    //finally { await client.close(); }
}

// do sorted search for query in db
export async function sortedSearch(db: string = dbName, collection: string = quotationCollectionName, query: {} = {}, filterOptions: {} = {}, limit: number = 10, skip: number = 0, sortOrder: number = -1, sortKey: string = "_id") {
    try {
        await run();
        return await client.db(db).collection(collection).find(query, filterOptions).sort({ _id: -1 }).skip(skip).limit(limit).toArray();//{ name: { $regex: query, $options: "i" } }
    }
    catch (error) { console.log("error while searching in db : ", error); }
    //finally { await client.close(); }
}

// count documents
export async function count(db: string = dbName, collection: string = quotationCollectionName, query: {} = {}) {
    try {
        await run();
        return await client.db(db).collection(collection).countDocuments(query);//{ name: { $regex: query, $options: "i" } }
    }
    catch (error) { console.log("error while searching in db : ", error); }
    //finally { await client.close(); }
}

// update one document in collection if condition satisfies
export async function update(db: string = dbName, collection: string = usersCollectionName, query: {} = {}, updateDoc: {}) {
    try {
        await run();
        return await client.db(db).collection(collection).updateOne(query, updateDoc);//{ name: { $regex: query, $options: "i" } }
    }
    catch (error) { console.log("error while upadting in db : ", error); }
    //finally { await client.close(); }
}

// delete one document in collection according to "no"
export async function deleteOneFromDB(query: {}, db: string = dbName, collection: string = quotationCollectionName): Promise<number | undefined> {
    try {
        if (Object.keys(query).length == 0)
            return undefined;

        await run();
        const result = await client.db(db).collection(collection).deleteOne(query);
        console.log(`New item created with the following id: ${result.deletedCount}`);
        return result.deletedCount;
    }
    catch (error) { console.log("error while deleting from database : ", error); }
    //finally { await client.close(); }
}

// updates or inserts one document according to "no"
export async function insertOrUpdateOnetoDb(data: any, db: string = dbName, collection: string = quotationCollectionName, updateFilter: {} = {}, upsert: true) {
    try {
        await run();
        const { _id, ...restData } = data;
        const result = await client.db(db).collection(collection).updateOne(updateFilter, { $set: { ...restData } }, { upsert: upsert });
        console.log(`New item created with the following id: ${result.upsertedId} : ${result}`);
        return result.upsertedCount;
    }
    catch (error) { console.log("error while updating document to database : ", error); }
    //finally { await client.close(); }
}

// insert one document to collection
export async function insertOnetoDb(data: any, db: string = dbName, collection: string = "logs") {
    try {
        await run();
        const result = await client.db(db).collection(collection).insertOne(data);
        console.log(`New log created with the following id: ${result.insertedId} : ${result}`);
        return result.insertedId;
    }
    catch (error) { console.log("error while inserting document to database : ", error); }
    //finally { await client.close(); }
}

export async function bulkWriteToDb(data: any[], db: string = dbName, collection: string = purchaseInvoiceCollectionName) {
    try {
        await run();
        const result = await client.db(dbName).collection(collection).bulkWrite(data);
        console.log(`New log created with the following id: ${result.upsertedIds}`);
        return result.upsertedIds;
    }
    catch (error) { console.log("error while bulk writing documents to database : ", error); }
}