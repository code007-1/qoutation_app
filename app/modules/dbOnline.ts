// how category and type is saving to db and convert sno to array
import { MongoClient, ServerApiVersion } from "mongodb";
import { dbName, dburi, quotationCollectionName, usersCollectionName } from "./utils";

const uri = dburi;//"mongodb+srv://spttcpl:9ziRq5mLRppCobx8@cluster0.bbixzsn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
//run();

export async function search(db: string = dbName, collection: string = quotationCollectionName, query: {} = {}, limit: number = 10, skip: number = 0) {
    try {
        await run();
        return await client.db(db).collection(collection).find(query).skip(skip).limit(limit).toArray();//{ name: { $regex: query, $options: "i" } }
    }
    catch (error) { throw console.error("error while saerching in db : ", error); }
    //finally { await client.close(); }
}

export async function sortedSearch(db: string = dbName, collection: string = quotationCollectionName, query: {} = {}, limit: number = 10, skip: number = 0, sortOrder: number = -1, sortKey: string = "_id") {
    try {
        await run();
        return await client.db(db).collection(collection).find(query).sort({ _id: -1 }).skip(skip).limit(limit).toArray();//{ name: { $regex: query, $options: "i" } }
    }
    catch (error) { console.log("error while searching in db : ", error); }
    //finally { await client.close(); }
}


export async function count(db: string = dbName, collection: string = quotationCollectionName, query: {} = {}) {
    try {
        await run();
        return await client.db(db).collection(collection).countDocuments(query);//{ name: { $regex: query, $options: "i" } }
    }
    catch (error) { console.log("error while searching in db : ", error); }
    //finally { await client.close(); }
}

export async function update(db: string = dbName, collection: string = usersCollectionName, query: {} = {}, updateDoc: {}) {
    try {
        await run();
        return await client.db(db).collection(collection).updateOne(query, updateDoc);//{ name: { $regex: query, $options: "i" } }
    }
    catch (error) { console.log("error while upadting in db : ", error); }
    //finally { await client.close(); }
}

export async function deleteOneFromDB(no: string, db: string = dbName, collection: string = quotationCollectionName,): Promise<number | undefined> {
    try {
        await run();
        const result = await client.db(db).collection(collection).deleteOne({ "no": no });
        console.log(`New item created with the following id: ${result.deletedCount}`);
        return result.deletedCount;
    }
    catch (error) { console.log("error while deleting from database : ", error); }
    //finally { await client.close(); }
}
export async function insertOrUpdateOnetoDb(data: any, db: string = dbName, collection: string = quotationCollectionName) {
    try {
        await run();
        const { _id, ...restData } = data;
        const result = await client.db(db).collection(collection).updateOne({ "no": data.no }, { $set: { ...restData } }, { upsert: true });
        console.log(`New item created with the following id: ${result.upsertedId} : ${result}`);
        return result.upsertedCount;
    }
    catch (error) { console.log("error while updating document to database : ", error); }
    //finally { await client.close(); }
}

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