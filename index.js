const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const squareRouter = require('./square/router')
const testRouter = require('./test/router')

app.use(bodyParser.json())

app.use(squareRouter)
app.use(testRouter)

app.listen(4001, () => console.log('Express API listening on port 4001'))
