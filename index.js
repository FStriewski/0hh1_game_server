const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const gameRouter = require('./game/router')
const testRouter = require('./test/router')

app.use(bodyParser.json())

app.use(gameRouter)
app.use(testRouter)

app.listen(4001, () => console.log('Express API listening on port 4001'))
