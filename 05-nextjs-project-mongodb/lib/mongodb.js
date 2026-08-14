import {MongoClient} from "mongodb"

const uri = process.env.Mongodb.MONGODB_URI;

let client;
let clientPromise;

if(!process.env.Mongodb.MONGODB_URI){
    throw new Error("Please add Mongodb URI")
}

// mongo client->mongodb bata connecn establish garna mongo client use huncha
client = new MongoClient(uri);
clientPromise = client.connect();

export default clientPromise;
