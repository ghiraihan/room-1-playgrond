require("dotenv").config();
const { Pool } = require("pg");
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: String(process.env.DB_PASSWORD),
});

async function temperature(req, res) {
  try {
    const { satuan, konv, suhu } = req.body;
    if (satuan == "c" && konv == "f") {
      let fehrenheit = (9 / 5) * suhu + 32;
      console.log("maka hasil dalam fehrenheit adalah " + fehrenheit);
      const request_date = new Date();
      // Use request_date in your query
      const insertResult = await pool.query(
        `INSERT INTO lihat_history (history, request_date) VALUES ($1, $2) RETURNING *`,
        [
          {
            "satuan suhu": satuan,
            "konversi suhu": konv,
            "suhu sekarang": suhu,
            hasilnya: fehrenheit,
          },
          request_date,
        ]
      );
      res.status(200).json({
        message: "history inserted successfully",
        uploadHistory: insertResult.rows[0],
      });
      return fehrenheit;
    } else if (satuan == "c" && konv == "r") {
      let reamure = (suhu * 4) / 5;
      console.log("maka hasil dalam reamure adalah " + reamure);
      const request_date = new Date();
      // Use request_date in your query
      const insertResult = await pool.query(
        `INSERT INTO lihat_history (history, request_date) VALUES ($1, $2) RETURNING *`,
        [
          {
            "satuan suhu": satuan,
            "konversi suhu": konv,
            "suhu sekarang": suhu,
            hasilnya: reamure,
          },
          request_date,
        ]
      );
      res.status(200).json({
        message: "history inserted successfully",
        uploadHistory: insertResult.rows[0],
      });
    } else if (satuan == "f" && konv == "c") {
      let celcius = ((suhu - 32) * 5) / 9;
      console.log("maka hasil dalam celcius adalah " + celcius);
      const request_date = new Date();
      // Use request_date in your query
      const insertResult = await pool.query(
        `INSERT INTO lihat_history (history, request_date) VALUES ($1, $2) RETURNING *`,
        [
          {
            "satuan suhu": satuan,
            "konversi suhu": konv,
            "suhu sekarang": suhu,
            hasilnya: celcius,
          },
          request_date,
        ]
      );
      res.status(200).json({
        message: "history inserted successfully",
        uploadHistory: insertResult.rows[0],
      });
    } else if (satuan == "f" && konv == "r") {
      let reamure = ((suhu - 32) * 4) / 9;
      console.log("maka hasil dalam reamure adalah " + reamure);
      const request_date = new Date();
      // Use request_date in your query
      const insertResult = await pool.query(
        `INSERT INTO lihat_history (history, request_date) VALUES ($1, $2) RETURNING *`,
        [
          {
            "satuan suhu": satuan,
            "konversi suhu": konv,
            "suhu sekarang": suhu,
            hasilnya: reamure,
          },
          request_date,
        ]
      );
      res.status(200).json({
        message: "history inserted successfully",
        uploadHistory: insertResult.rows[0],
      });
    } else if (satuan == "r" && konv == "c") {
      let celcius = (suhu * 5) / 4;
      console.log("maka hasil dalam celcius adalah " + celcius);
      const request_date = new Date();
      // Use request_date in your query
      const insertResult = await pool.query(
        `INSERT INTO lihat_history (history, request_date) VALUES ($1, $2) RETURNING *`,
        [
          {
            "satuan suhu": satuan,
            "konversi suhu": konv,
            "suhu sekarang": suhu,
            hasilnya: celcius,
          },
          request_date,
        ]
      );
      res.status(200).json({
        message: "history inserted successfully",
        uploadHistory: insertResult.rows[0],
      });
    } else if (satuan == "r" && konv == "f") {
      let fehrenheit = (suhu * 9) / 4 + 32;
      console.log("maka hasil dalam fehrenheit adalah " + fehrenheit);
      const request_date = new Date();
      // Use request_date in your query
      const insertResult = await pool.query(
        `INSERT INTO lihat_history (history, request_date) VALUES ($1, $2) RETURNING *`,
        [
          {
            "satuan suhu": satuan,
            "konversi suhu": konv,
            "suhu sekarang": suhu,
            hasilnya: fehrenheit,
          },
          request_date,
        ]
      );
      res.status(200).json({
        message: "history inserted successfully",
        uploadHistory: insertResult.rows[0],
      });
    } else {
      console.log("Silahkan isi dengan benar!");
      res.status(500).json({ message: "Yang bener aja cok !" });
    }
  } catch (error) {
    console.log(error);
  }
}
module.exports = temperature;
