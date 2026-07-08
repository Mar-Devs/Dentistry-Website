import { Pool } from "pg";
import { loadEnvFile } from "node:process";
import path from "node:path";

try {
  process.loadEnvFile(path.join(import.meta.dirname,"..", "..", "..",".env"));
} catch (err) {
  console.log(err);
}

export default new Pool({
  connectionString: process.env.DATABASE_PUBLIC_URL,
  ssl: { rejectUnauthorized: false },
});
