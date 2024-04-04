//const pg = require("pg");
require("dotenv").config();
const pool = require("../model/database");

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
