// make an instance of express router
const express = require('express')
const router = express.Router()

// mount routes on express router

// GET /leaveit/movies -- renders view of bad movies
router.get('/movies', (req, res) => {
    res.render('movies.ejs', {
        movies: ['Sharknado', 'Blonde', 'The New Hocus Pocus', 'The Godfather', 'The New Starwars Movies (most recent trilogy)']
    })
})

// GET /leaveit/products -- renders view of bad products
router.get('/products', (req, res) => {
    res.render('products.ejs', {
        products: ['Crocs', 'Microsoft Products (except vscode)', 'Arrowhead', 'Activision', 'Any shit product by Elon Musk']
    })
})

// export the router
module.exports = router