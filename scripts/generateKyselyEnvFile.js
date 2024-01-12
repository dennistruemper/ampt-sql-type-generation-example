import { params } from "@ampt/sdk";
import * as fs from "fs";

// get the database connection string from the ampt params
const content = `DATABASE_URL=${params().list()["_AMPT_INTERNAL_NEON_URL"]}`;
fs.writeFileSync("kysely.env", content);
