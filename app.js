var express = require('express')
var app = express()
var pg = require('pg')
var cors = require('cors')
var knex = require('./knex.js')
var bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))




app.listen(3000, function () {
  console.log('Listening on port 3000')
})
