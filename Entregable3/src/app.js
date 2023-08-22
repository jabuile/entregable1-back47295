const ProductManager = require  ('../productMT');
const express = require('express');

const port =8080

const app = express();
app.get('/products', (req, res) => {
    res.json( new ProductManager)

});

app.listen(port);