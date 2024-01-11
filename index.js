const express = require('express');
const app = express();

const port = 8000;
const Vigenere = require('caesar-salad').Vigenere;

app.get('/:name', (req, res) => {
  res.send(req.params.name);
});

app.get('/encode/:text', (req, res) => {
  const result = Vigenere.Cipher('password').crypt(req.params.text);
  res.send(result);
});

app.get('/decode/:text', (req, res) => {
  const result = Vigenere.Decipher('password').crypt(req.params.text);
  res.send(result);
});


app.listen(port, () => {
  console.log('Server is running on', port);
});