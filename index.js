const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./game/router')

app.use(router)

app.listen(4001, () => console.log('Express API listening on port 4001'))
