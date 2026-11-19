import { drizzle } from "drizzle-orm/netlify-db";
import * as schema from "./schema.ts";
let database;
export function getDb() { return database ??= drizzle({ schema }); }
