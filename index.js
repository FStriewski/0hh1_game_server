const express = require('express')
const app = express()

var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://postgres:secret@localhost:5432/postgres')

app.listen(4001, () => console.log('Express API listening on port 4001'))

app.get('/houses/:id', (request, response) => {
  const houseId = request.params.id
  // ... run SQL query
  response.send(/* reponse from SQL query */)
})

app.get('/houses', (request, response) => {
  // ... run SQL
  response.send({
    houses: /* result of SQL */
  })
})
