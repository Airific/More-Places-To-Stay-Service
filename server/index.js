const express = require('express');
const db = require('../database/index.js');

const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/listings/moreplaces/:id', (req, res) => {
  const { id } = req.params;
  db.getHouses(id, (error, results) => {
    if (error) {
      res.status(400).send('Something wrong with getting');
    } else {
      res.status(201).send(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Airific listening at http://localhost:${port}`);
});
