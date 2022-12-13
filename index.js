// required packages
const express = require('express')

// app config
const app = express()
const PORT = 4200
app.set('view engine', 'ejs')

// routes
app.get('/', (req, res) => {
    res.render('index.ejs')
})

// listen on a port
app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT} 🎧`)
})