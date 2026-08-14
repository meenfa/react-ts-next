import {MongoClient} from "mongodb"

const uri = process.env.MONGODB_URI;

if(!uri){
    throw new Error("Please add Mongodb URI")
}

// mongo client->mongodb bata connecn establish garna mongo client use huncha
const client = new MongoClient(uri);
const clientPromise = client.connect();

export default clientPromise;
