//1 call module express
const express = require("express");
const PORT = process.env.PORT || 3000;
const path = require("path");
const lihatHistory = require("./model/history.js");
const hitungLuasLingkaran = require("./controller/hitungLuasLingkaran.js");
const hitungKelilingLingkaran = require("./controller/hitungKelilingLingkaran.js");
//const pg = require("pg");
require("dotenv").config();
const temperature = require("./controller/hitung_suhu.js");
const historyDB = require("./controller/historyDb.js");
const postArticle = require("./controller/postArticle");
//controller
const app = express();
app.use(express.urlencoded({ extended: true }));

//4  todo :routing
app.get("/keliling-lingkaran", function (request, response) {
  response
    .status(200)
    .sendFile(path.join(__dirname, "/view/indexKelilingLingkaran.html"));
});
app.get("/luas-lingkaran", function (request, response) {
  response
    .status(200)
    .sendFile(path.join(__dirname, "/view/indexLuasLingkaran.html"));
});
app.get("/lihat-history", function (request, response) {
  response.status(200).json({
    lihatHistory,
  });
});
app.post("/luas-lingkaran", hitungLuasLingkaran);
app.post("/keliling-lingkaran", hitungKelilingLingkaran);
app.get("/history", historyDB);
app.post("/hitung-suhu", temperature);
app.post("/newarticle", postArticle);

//3 running server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
