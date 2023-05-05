const express = require('express')
const QuestionController = require('./controllers/QuestionController')

// Funcionalidades de rotas do express
const route = express.Router()

// Rotas ejs
route.get('/', (req, res) => res.render("home", {page: 'enter-room'}))
route.get('/create-pass', (req,res) => res.render("home", {page: 'create-pass'}))
route.get('/room', (req, res) => res.render("room"))

route.post("/room/:room/:question:/action", QuestionController.index)
// route.post('/room/:room/:question:/:action' , QuestionController.index)

// Exportando Route
module.exports = route