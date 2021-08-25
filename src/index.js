const express = require('express')
const app = express()
require('dotenv').config()

// server config
app.use(express.json())

// import routes
const routes = require('./routes')
app.use(routes)

// server data config
const protocol = process.env.PROTOCOL || 'http'
const ip = require('ip').address()
const port = process.env.PORT || 3030

app.listen(port, console.log(`Server started in http://localhost:${port} or ${protocol}:${ip}:${port}`))
