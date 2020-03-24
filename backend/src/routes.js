const express = require('express')
const ong = require('./controllers/OngController')
const incident = require('./controllers/IncidentController')
const profile = require('./controllers/ProfileController')
const session = require('./controllers/SessionController')
const routes = express.Router()

// SESSION ROUTES
routes.post('/session', session.login)
// ONG ROUTES
routes.get('/ongs', ong.list)
routes.post('/ong', ong.create)
routes.get('/profile', profile.list)

// INCIDENT ROUTES
routes.get('/incidents', incident.list)
routes.post('/incident', incident.create)
routes.delete('/incident/:id', incident.delete)

module.exports = routes
