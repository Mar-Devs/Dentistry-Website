import pool from "./pool.js";
import format from "pg-format";

async function dropTable() {
    await pool.query("DROP TABLE trial")
}

dropTable()