//1 call module express
const express = require("express");
const port = 3456;
const path = require("path");
const lihatHistory = require("./model/history.js");
// 2 make variable to save server
const app = express();
app.use(express.urlencoded());
//controller
const hitungLuasLingkaran = require("./controller/hitungLuasLingkaran.js");
const hitungKelilingLingkaran = require("./controller/hitungKelilingLingkaran.js");
//4  todo :routing

// 1. Endpoint liat history database.
app.get('/history', function(request, response){
    response.status(200).sendFile(path.join(__dirname, "/view/indexKelilingLingkaran.html"))
})

app.get('/keliling-lingkaran', function(request, response){
    response.status(200).sendFile(path.join(__dirname, "/view/indexKelilingLingkaran.html"))
})
app.get('/luas-lingkaran', function(request, response){
    response.status(200).sendFile(path.join(__dirname, "/view/indexLuasLingkaran.html"))
})
app.get('/lihat-history', function(request,response){
    response.status(200).json({
        lihatHistory
    })
})
app.post('/luas-lingkaran', hitungLuasLingkaran)
app.post('/keliling-lingkaran',hitungKelilingLingkaran)
app.get("/keliling-lingkaran", function (request, response) {
  response
    .status(200)
    .sendFile(path.join(__dirname, "/view/indexKelilingLingkaran.html"));
});
// app.get("/luas-lingkaran", function (request, response) {
//   response
//     .status(200)
//     .sendFile(path.join(__dirname, "/view/indexLuasLingkaran.html"));
// });
// app.get("/lihat-history", function (request, response) {
//   response.status(200).json({
//     lihatHistory,
//   });
// });
// app.post("/luas-lingkaran", hitungLuasLingkaran);
// app.post("/keliling-lingkaran", hitungKelilingLingkaran);



//3 running server
app.listen(port, function () {
  console.log(`server is running at locallhost:${port}`);
});
