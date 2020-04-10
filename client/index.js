const express = require('express')
const app = express()
const port = 3000

// get axios data requests
const fetch = require('./fetch')

// setup rendering engine
app.set('view engine', 'pug')

app.get('/', async (req, res) => {
    let products = await fetch.get_product_listings()

    res.render('index', { products: products })
})

app.listen(port, () => console.log(`Client listening on http://localhost:${port}`))