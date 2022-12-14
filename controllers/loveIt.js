// make an instance of express router
const express = require('express')
const router = express.Router()

// mount your routes on the router

// GET /loveit/animals -- a view of favorite animals
router.get('/animals', (req, res) => {
    res.render('animals.ejs', {
        animals: ['cat', 'dog', 'aardvark', 'parrot', 'sloth']
    })
})

// GET /loveit/foods -- renders view of fav foods
router.get('/foods', (req, res) => {
    res.render('foods.ejs', {
        foods: ['burger', 'wings', 'lobster', 'hummus', 'pasta']
    })
})

// export the router
module.exports = router