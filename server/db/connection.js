import { MongoClient, ServerApiVersion } from "mongodb";
//get our Atlas URI from the environment variable that we just created. 
//const uri = process.env.ATLAS_URI || "";
const uri = process.env.ATLAS_URL;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

try {
    //Connect the client to the server
    await client.connect();
    //send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
    );
} catch(err) {
    console.error(err);
}
// It is going to create it automatically for us.
let db = client.db("employees"); 

export default db;