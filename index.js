//1 call module express
const express = require ("express");
const port = 3456;
// 2 make variable to save server
const app = express();
app.use(express.urlencoded());
//controller
const lihatHistory=require('./model/history.js');
const hitungLuasLingkaran=require('./controller/hitungLuasLingkaran.js');
const hitungKelilingLingkaran=require('./controller/hitungKelilingLingkaran.js');
//4  todo :routing
app.get('/',function(request,response){
    response.sendfile('')

});
app.get('/lihat-history', lihatHistory)
app.get('/hitung-luas-lingkaran', hitungLuasLingkaran)
app.get('/hitung-keliling-lingkaran',hitungKelilingLingkaran)
//3 running server
app.listen(port,function()
{
    console.log(`server is running at locallhost:${port}`);
    
})

