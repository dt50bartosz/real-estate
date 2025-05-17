import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = { family: 4};

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let client;
let clientPromise;

console.log(uri,"url");

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
