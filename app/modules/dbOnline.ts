const username = "spttcpl";
const password = "9ziRq5mLRppCobx8";
import { cli } from "@remix-run/dev";
/*import { MongoClient } from "mongodb";

const uri = "mongodb+srv://ttcplhelpdesk:<db_password>@cluster0.fvsd2fl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
await client.connect();
const db = client.db("yourDatabase");
const collection = db.collection("yourCollection");

export async function searchItems(query: string) {
    return await collection.find({ name: { $regex: query, $options: "i" } }).limit(10).toArray();
}*/


//const { MongoClient, ServerApiVersion } = require('mongodb');
import { MongoClient, ServerApiVersion } from "mongodb";
import { QuotationData } from "~/routes/dashboard.quote";

const uri = "mongodb+srv://spttcpl:9ziRq5mLRppCobx8@cluster0.bbixzsn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("unnamed").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
//run().catch(console.dir);

export async function search(db: string = "unnamed", collection: string = "qoutations", query: {} = {}, limit: number = 10, skip: number = 0) {
    try {
        await client.connect();
        return await client.db(db).collection(collection).find(query).skip(skip).limit(limit).toArray();//{ name: { $regex: query, $options: "i" } }
    }
    catch (error) {
        console.log("error while saerching in db : ", error);
    }
    finally {
        await client.close();
    }
}

export async function count(db: string = "unnamed", collection: string = "qoutations", query: {} = {}) {
    try {
        await client.connect();
        return await client.db(db).collection(collection).countDocuments(query);//{ name: { $regex: query, $options: "i" } }
    }
    catch (error) {
        console.log("error while saerching in db : ", error);
    }
    finally {
        await client.close();
    }
}

export async function update(db: string = "unnamed", collection: string = "users", query: {} = {}, updateDoc: {}) {
    try {
        await client.connect();
        return await client.db(db).collection(collection).updateOne(query, updateDoc);//{ name: { $regex: query, $options: "i" } }
    }
    catch (error) {
        console.log("error while saerching in db : ", error);
    }
    finally {
        await client.close();
    }
}


export async function insertQoutation(data: QuotationData) {
    client.connect().then(async (e) => {
        const result = await client.db("unnamed").collection("quotations").insertOne(data);
        console.log(`New item created with the following id: ${result.insertedId} : ${result}`);
    }).catch(console.error).finally(() => client.close());

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