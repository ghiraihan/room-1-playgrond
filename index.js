const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.urlencoded({ extended: true }));

const port = 3000;

// function konversi suhu
// Converts Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  // Converts Celsius to Reaumur
  function celsiusToReaumur(celsius) {
    return (celsius * 4/5);
  }
  
  // Converts Reaumur to Celsius
  function reaumurToCelsius(reaumur) {
    return (reaumur * 5/4);
  }
  
  // Converts Fahrenheit to Celsius
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  // Converts Reaumur to Fahrenheit
  function reaumurToFahrenheit(reaumur) {
    return (reaumur * 9/4) + 32;
  }
  


app.get('/lihat-history', (req, res) => {
  // Define the JSON response
  const jsonResponse = [
    {
      "suhuAwal": 30,
      "satuanAwal": "C",
      "suhuKonversi": 50
    }
  ];

  // Send the JSON response
  res.json(jsonResponse);
});


app.post('/hitung-suhu', (req,res)=>{
    const { suhuAwal, satuanAwal, satuanKonversi } = req.body;
  let suhuKonversi;
  let status = 'success';

  try {
    // Conversion logic based on the input and desired output units
    if (satuanAwal === 'C' && satuanKonversi === 'F') {
      suhuKonversi = celsiusToFahrenheit(suhuAwal);
    } else if (satuanAwal === 'C' && satuanKonversi === 'R') {
      suhuKonversi = celsiusToReaumur(suhuAwal);
    } else {
      // Add more conditionals for other conversions
      status = 'error';
      throw new Error('Invalid conversion units');
    }

    // Respond with the converted temperature and status
    res.json({ status, suhuKonversi });
  } 
  catch (error) 
  {
    res.status(400).json({ status, message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
