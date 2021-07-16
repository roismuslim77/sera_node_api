var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    router = express.Router()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

var routes = require('./app/config/routers/config.router')
routes(app, router)

app.listen(port)
console.log('Server running on: '+port)