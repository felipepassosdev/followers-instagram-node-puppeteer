const express = require('express')

const routes = express.Router()

const BaresController = require('./controller/BaresController')

routes.get('/bares', BaresController.getBares)
routes.post('/bares', BaresController.postBares)

module.exports = routes;