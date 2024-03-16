const historyHit = require('../model/history')

function hitungLuasLingkaran(request, response){
    const data = request.body;
    const jariJari = data.jariJari;

    const luas = 3.14 * jariJari * jariJari;

    historyHit.push({
        JariJari: jariJari,
        Luas: luas
    });

    response.send(`Lingkaran yang jari jarinya ${jariJari} Luasnya adalah ${luas}`);
    return luas;
}

module.exports = hitungLuasLingkaran;