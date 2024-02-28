import { drizzle } from "drizzle-orm/better-sqlite3";
import DB from "better-sqlite3";
import * as schema from "./schema.mjs";

const dbInstance = new DB("./test.db");
const db = drizzle(dbInstance, {
  schema
});

export default db;