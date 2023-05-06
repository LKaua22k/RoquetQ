const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

// Funcionalidades de rotas do express
const route = express.Router()

// Rotas ejs
route.get('/', (req, res) => res.render("home", {page: 'enter-room'}))
route.get('/create-pass', (req,res) => res.render("home", {page: 'create-pass'}))
route.get('/room/:room', (req, res) => res.render("room"))

route.post('/question/:room/:question:/:action', QuestionController.teste)
route.post('/create-room', RoomController.create)
// route.post('/room/:room/:question:/:action' , QuestionController.index)

// Exportando Route
module.exports = route