//to connect db
// mongo client->mongodb bata connecn establish garna mongo client use huncha
import {MongoClient} from "mongodb"

// const var
const uri = process.env.MONGODB_URI;

if(!uri){
    throw new Error("Please add Mongodb URI")
}
const client = new MongoClient(uri);

export async function connectDB() {
    // .connect -> db sanga conecn establish garnu
    const clientConnection = await client.connect();

    const db = clientConnection.db("next_mongodb_course");

    return db ;
}

