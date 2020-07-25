// Back-end NodeJS com MongoDB, usando também Express(para as rotas) e nodemon(ver alterações e reiniciar o servidor),  
// Mongoose (solução baseada em esquemas para modelar os dados da sua aplicação), 
// Require-dir(faz o papel de require, EX: com ele não é necessário fazer require de todos os models)

const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')
const bodyParser = require('body-parser')

// STARTING APP
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// CORS
app.use(cors())

// send data in JSOM format
app.use(express.json())

requireDir('./src/models/')

// WILD CARD - Receive GET / POST / PUT / DELETE, Whatever
app.use('/api', require('./src/routes'))

// LISTENING APP
app.listen(3001)

