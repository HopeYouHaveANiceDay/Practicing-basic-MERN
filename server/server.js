import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
import express from "express";
import cors from "cors";
import records from "./routes/record.js"; // this is where we're pulling in our records for our routes

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", records); // we're initializing it right here 
// notice here we have "/record" here, this allows us to identify an initial path => find a specific record by ID
// /record/12345 => the record's ID 
// /record/ => get all records

//start the Express server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});