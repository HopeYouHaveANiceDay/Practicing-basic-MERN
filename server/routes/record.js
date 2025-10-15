import express from "express";

// This will help us connect to the database
import db from "../db/connection.js";

// This help convert the id from string to ObjectId for the _id field.
import { ObjectId } from "mongodb";

// router is an instance of the express router.
// we use it to define our router.
// The router will be added as a middleware and will take control of requests starting with path/record.
const router = express.Router();

// set up our various API endpoints. This section will help you get a list of all the records.
router.get("/", async (req, res) => {
    let collection = await db.collection("records");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

// This section will help you get a single record by id.
router.get("/:id", async (req, res) => {
    let collection = await db.collection("records");
    let query = { id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.send("NOT found").status(404);
    else res.send(result).status(200);
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
    try { // create a new document object
        let newDocument = { 
            name: req.body.name,
            position: req.body.position,
            level: req.body.level,
        };
        let collection = await db.collection("records"); // get our collection which is records 
        let results = await collection.insertOne(newDocument); // insert one => insert that a new document that we created
        res.send(result).status(204); // the result is going to be sent and with a status of 204
    }   catch (err) {
        console.error(err);
        res.status(500).send("Error adding record");
    }
});

// This section will help you update a record by id.
router.patch("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) }; // create our query here. _id is going to be new object ID which we're going to get from the request params.id 
        const updates = {
            $set: {
                name: req.body.name,
                position: req.body.position,
                level: req.body.level,
            },
        };

        let collection = await db.collection("records");
        let result = await collection.updateOne(query, updates); // update one send it our query along with the updates 
        res.send(result).status(200); // send a result with a status of 200
    }   catch (err) {
        console.error(err);
        res.status(500).send("Error updating record");
    }
});

// This section will help you delete a record
router.delete("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };

        const collection = db.collection("records");
        let result = await collection.deleteOne(query); // delete based on query

        res.send(result).status(200);
    }   catch (err) {
        console.error(err);
        res.status(500).send("Error deleting record");
    }
});

export default router; // we export the entire router so that it can be used by Express