const express = require('express')

// Importando o arquivo de rotas
const routes = require('./route')

// Importando o modulo de path
const path = require('path')

const server = express()

// O ejs vai ser o view
server.set('view engine', 'ejs')


server.use(express.static('public'))

// Aqui estou pegando a pasta views
server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({extended:true}))

// Dizendo para o server usar as rotas
server.use(routes)

server.listen(3000,() => console.log('Rodando'))