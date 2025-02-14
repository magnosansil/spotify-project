import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config({ path: "./../.env" });

const dbURI = process.env.DB_URI;

const client = new MongoClient(dbURI);

export const db = client.db("spotify");
