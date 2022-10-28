const express = require('express');
var cors = require('cors');
const app = express();
const port = 5000;
app.use(cors())


const products = require("./products.json")

app.get('/', (req, res) => {
    res.send('This Server is created for assignment 10 by S M SHAFI.')
})

app.get('/products', (req, res) => {
    res.json(products)
})

app.get('/product/:id', function ({ params }, res, next) {
    const data = products.find(({ id }) => id == params.id);
    res.json(data)
})

app.listen(port, () => {
    console.log(`SINTAG PRIVATE LTD server app listening on port ${port}`)
})