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

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("unnamed").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
run();

export async function search() {
    try {
        //const db = client.db("unnamed");
        //const challans = db.collection("challans");
        //const result = await challans.aggregate([{ $match: { "items.sno": "4532" } }]).toArray();

        //console.log("result is : ", result);

        //await client.connect();
        const result = await client.db("unnamed").collection("challans").find({ "items.sno": "421" }).toArray();
        //(collection).find(query).skip(skip).limit(limit).toArray();//{ name: { $regex: query, $options: "i" } }
        console.log("resulted data : ", result[0].items)
    }
    catch (error) { console.log("error while saerching in db : ", error); }
    //finally { await client.close(); }
}

search();