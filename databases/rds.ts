import { Database, MySQLConnector } from "https://deno.land/x/denodb@v1.1.0/mod.ts";
import Role from "../models/rds/Role.ts";

const connector = new MySQLConnector({
  database: 'dominDeno',
  host: 'deno-domin-db.cknhp4zoel1e.us-east-1.rds.amazonaws.com',
  username: 'admin',
  password: 'domin2122',
  port: 3306,
});

const db = new Database(connector);

db.link([Role])

await db.sync();