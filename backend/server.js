const express = require('express');
const dotevn = require('dotenv');

const products = require('./data/products');
const app = express();
dotevn.config();

const { PORT = 5000, NODE_ENV } = process.env;

app.get('', (req, res) => {
  res.send('API is running...');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id);
  res.json(product);
});

app.listen(
  PORT,
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`)
);
