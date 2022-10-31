import { MongoClient } from "https://deno.land/x/mongo@v0.31.1/mod.ts";
import { User } from "../models/User.ts";
import { Role } from "../models/Role.ts";
import { config } from "../config/config.ts";
import { Env } from "../types/env.ts";
// Mongo Connection Init
const client = new MongoClient();
try {
    await client.connect(config[Env.MongoDbUri]);
    console.log("Database successfully connected");
} catch (err) {
    console.log(err);
}

const db = client.database("test");
export const users = db.collection<User>("users");
export const roles = db.collection<Role>("roles");