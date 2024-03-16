const historyHit = require('../model/history')

function hitungKelilingLingkaran(request, response){
    const data = request.body;
    const jariJari = data.jariJari;

    const keliling = 2* 3.14 * jariJari;
    historyHit.push({
        JariJari: jariJari,
        Keliling: keliling
    });
    response.send(`Lingkaran yang jari jarinya ${jariJari} Kelilingnya adalah ${keliling}`);
}

module.exports = hitungKelilingLingkaran;