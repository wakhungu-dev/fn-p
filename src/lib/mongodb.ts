import { MongoClient } from "mongodb";

console.log('Environment Variables:', {
  MONGODB_URI: process.env.MONGODB_URI,
  GOOGLE_ID: process.env.GOOGLE_ID,
  GOOGLE_SECRET: process.env.GOOGLE_SECRET,
});

if (!process.env.NEXT_MONGODB_URI2) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
    console.log("Creating a new MongoClient and connecting in development mode.");
  }
  clientPromise = global._mongoClientPromise;
  console.log("Using existing MongoClient in development mode.");
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
  console.log("Creating a new MongoClient and connecting in production mode.");
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
clientPromise
  .then(() => {
    console.log("MongoDB connected successfully.");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

export default clientPromise;
