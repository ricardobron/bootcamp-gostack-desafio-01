const express = require('express')

const routes = require('./routes')

const { logMiddleware} = require('../src/middlewares')

const app = express()

app.use(express.json())
app.use(logMiddleware)
app.use(routes)

app.listen(3000)