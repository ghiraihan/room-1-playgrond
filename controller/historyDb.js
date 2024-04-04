//const pg = require("pg");
require("dotenv").config();
const { Pool } = require("pg");
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: String(process.env.DB_PASSWORD),
});

async function historyDB(req, res) {
  try {
    pool.connect; // Ensure you're connecting to the database
    const data = await pool.query(`SELECT * FROM lihat_history`);
    console.log(data.rows);
    res.status(200).json(data.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching history" });
  }
}
module.exports = historyDB;
