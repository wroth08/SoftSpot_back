var express = require('express')
var knex = require('../knex')
var router = express.Router()

router.get('/', function (req, res) {
  knex.select('*')
    .from('review')
    .then( data => {
      res.json(data)
    })
})

router.get('/:id', function (req, res) {
  let id = req.params.id
  knex.select('*')
    .from('review')
    .where('id', id)
    .then( data => {
      res.json(data)
    })
})


module.exports = router
