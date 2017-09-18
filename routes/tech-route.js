var express = require('express')
var knex = require('../knex')
var router = express.Router()

router.get('/', function (req, res) {
  knex.select('name', 'description', 'url', 'category')
    .from('tech')
    .then( function (data) {
      res.json(data)
    })
})

router.get('/:id', function (req, res) {
  let id = req.params.id
  knex.select('name', 'description', 'url', 'category')
    .from('tech')
    .where('id', id)
    .then( function (data) {
      res.json(data)
    })
})



module.exports = router
