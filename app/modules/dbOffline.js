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
        const db = client.db("unnamed");
        const challans = db.collection("challans");
        const result = await challans.aggregate([{ $unwind: "$items" }, { $unwind: "$items.sno" }, { $match: { "items.sno": "\b123234\b" } }, { $project: { no: 1, date: 1, "items.sno": 1 } }]);
        //console.log("result is : ", result);
        console.log("resulted data : ", await result.toArray())
        //await client.connect();
        //return await client.db("unnamed").aggregate([{ $undwind: "$items.sno" }, { $project: { no: 1, "items.sno": 2, date: 3 } }])
        //(collection).find(query).skip(skip).limit(limit).toArray();//{ name: { $regex: query, $options: "i" } }
    }
    catch (error) { console.log("error while saerching in db : ", error); }
    //finally { await client.close(); }
}

search();