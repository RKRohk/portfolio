import MongoClient from 'mongodb'
const MONGODB_URI = process.env.MONGODB_URI; // or Atlas connection string
let cachedDb:MongoClient.MongoClient = null;
export const connectToDatabase = async () => {
  console.log('=> connect to database');
  if (cachedDb) {
    console.log('=> using cached database instance');
    return Promise.resolve(cachedDb);
  }
  const db:MongoClient.MongoClient = await MongoClient.connect(MONGODB_URI);
    cachedDb = db;
    return cachedDb;
}
