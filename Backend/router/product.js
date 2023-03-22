const express = require('express');
const app = express();
const product = require("../controller/product");


// Add Product - Test
app.post('/add', product.addProduct)

module.exports = app;
