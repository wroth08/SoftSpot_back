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

router.post('/', function (req, res) {
  var row = req.body
  console.log(row)
  knex('tech')
    .insert(row)
    .returning('*')
      .then( () => {
        res.json(row);
      })
})


module.exports = router
