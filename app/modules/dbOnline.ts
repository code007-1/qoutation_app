// how category and type is saving to db and convert sno to array
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb+srv://spttcpl:9ziRq5mLRppCobx8@cluster0.bbixzsn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
        await client.db("unnamed").command({ ping: 1 });
        return true;
    } catch (err) {
        return false;
    }
}

async function run() {
    try {
        const tf = await isMongoConnected();
        //check if already connected
        if (tf) {
            // Connect the client to the server	(optional starting in v4.7)
            await client.connect();
            // Send a ping to confirm a successful connection
            await client.db("unnamed").command({ ping: 1 });
            console.log("Pinged your deployment. You successfully connected to MongoDB!");
        }
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
//run();

export async function search(db: string = "unnamed", collection: string = "qoutations", query: {} = {}, limit: number = 10, skip: number = 0) {
    try {
        await run();
        return await client.db(db).collection(collection).find(query).skip(skip).limit(limit).toArray();//{ name: { $regex: query, $options: "i" } }
    }
    catch (error) { console.log("error while saerching in db : ", error); }
    //finally { await client.close(); }
}

export async function sortedSearch(db: string = "unnamed", collection: string = "qoutations", query: {} = {}, limit: number = 10, skip: number = 0, sortOrder: number = -1, sortKey: string = "_id") {
    try {
        await run();
        return await client.db(db).collection(collection).find(query).sort({ _id: -1 }).skip(skip).limit(limit).toArray();//{ name: { $regex: query, $options: "i" } }
    }
    catch (error) { console.log("error while saerching in db : ", error); }
    //finally { await client.close(); }
}


export async function count(db: string = "unnamed", collection: string = "qoutations", query: {} = {}) {
    try {
        await run();
        return await client.db(db).collection(collection).countDocuments(query);//{ name: { $regex: query, $options: "i" } }
    }
    catch (error) { console.log("error while saerching in db : ", error); }
    //finally { await client.close(); }
}

export async function update(db: string = "unnamed", collection: string = "users", query: {} = {}, updateDoc: {}) {
    try {
        await run();
        return await client.db(db).collection(collection).updateOne(query, updateDoc);//{ name: { $regex: query, $options: "i" } }
    }
    catch (error) { console.log("error while saerching in db : ", error); }
    //finally { await client.close(); }
}

export async function deleteOneFromDB(no: string, db: string = "unnamed", collection: string = "quotations",): Promise<number | undefined> {
    try {
        await run();
        const result = await client.db(db).collection(collection).deleteOne({ "no": no });
        console.log(`New item created with the following id: ${result.deletedCount}`);
        return result.deletedCount;
    }
    catch (error) { console.log("error while deleting from database : ", error); }
    //finally { await client.close(); }
}
export async function insertOrUpdateOnetoDb(data: any, db: string = "unnamed", collection: string = "quotations") {
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

export async function insertOnetoDb(data: any, db: string = "unnamed", collection: string = "logs") {
    try {
        await run();
        const result = await client.db(db).collection(collection).insertOne(data);
        console.log(`New log created with the following id: ${result.insertedId} : ${result}`);
        return result.insertedId;
    }
    catch (error) { console.log("error while inserting document to database : ", error); }
    //finally { await client.close(); }
}


/*export const QuoteItemsSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    description: { type: String },
    link: { type: String }
}, { _id: false });

export const QuotationDataSchema = new Schema({
    no: { type: String, required: true },
    date: { type: String, required: true },
    items: { type: Map, of: QuoteItemsSchema, required: true },
    intro: { type: String, required: true },
    terms: { type: String, required: true },
    additionalInfo: { type: String, required: true },
    from: { type: String, required: true },
    fromAddress: { type: String, required: true },
    to: { type: String, required: true },
    toAddress: { type: String, required: true },
    tax: { type: Number, required: true },
    discount: { type: Number, required: true }
});
*/