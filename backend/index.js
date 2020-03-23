const express = require('express')
const app = express()

app.listen(3333)

app.get('/', (request, response) => {
  return response.json({
    'username': 'Gustavo Barcelos',
    'event': 'OmniStack Week 11'
  })
})