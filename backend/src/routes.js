const express = require('express')
const { celebrate, Joi, Segments } = require('celebrate')
const ong = require('./controllers/OngController')
const incident = require('./controllers/IncidentController')
const profile = require('./controllers/ProfileController')
const session = require('./controllers/SessionController')
const routes = express.Router()

// SESSION ROUTES
routes.post('/session', celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required().length(16)
  })
}), session.login)
// ONG ROUTES
routes.get('/ongs', ong.list)
routes.post('/ong', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.number().required().max(99999999999),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2)
  })
}), ong.create)
routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}), profile.list)
// INCIDENT ROUTES
routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number().integer()
  })
}), incident.list)
routes.post('/incident', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown(),
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required()
  }),
}), incident.create)
routes.delete('/incident/:id', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown(),
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().integer().required()
  })
}), incident.delete)

module.exports = routes
