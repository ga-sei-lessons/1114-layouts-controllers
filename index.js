// required packages
const express = require('express')

// app config
const app = express()
const PORT = 4200
app.set('view engine', 'ejs')
// tell express explicitly to serve static assets (by telling what folder to use)
// 'middlewares' -- ways to config express and work with incoming requests 
// app.use(express.static('static asset folder'))
app.use(express.static('public'))

// routes
app.get('/', (req, res) => {
    res.render('index.ejs')
})

// Controllers
// app.use('/common url prefix', require('./path to controller file'))
app.use('/loveit', require('./controllers/loveIt'))
app.use('/leaveit', require('./controllers/leaveIt'))


// listen on a port
app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT} 🎧`)
})