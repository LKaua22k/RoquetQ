const express = require('express')

// Funcionalidades de rotas do express
const route = express.Router()

// Rotas ejs
route.get('/', (req, res) => res.render('home'))
route.get('/create-pass', (req, res) => res.render('create-pass'))
route.get('/room', (req, res) => res.render('room'))

// Exportando Route
module.exports = route