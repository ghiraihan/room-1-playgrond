const pg = require("pg");
const client = new pg.Client();
const { Pool } = require("pg");
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

async function postArticle(req, res) {
  try {
    const { title, body, approved } = req.body;
    const result = await pool.query(
      "INSERT INTO articles (title, body, approved) VALUES ($1, $2, $3) RETURNING *",
      [title, body, approved]
    );
    res.status(200).json({
      message: "Article inserted successfully",
      article: result.rows[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error inserting article" });
  }
}

module.exports = postArticle;
