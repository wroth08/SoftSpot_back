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
  knex('tech')
    .insert(row)
    .returning('*')
      .then( () => {
        res.json(row);
      })
})

router.delete('/:id', function (req, res) {
  let techId = req.params.id
  knex('review')
    .where('review.tech_id', techId)
    .del()
    .then(
      knex('tech')
        .where('tech.id', techId)
        .del()
        .then( () => {
          res.send('woop woop')
        })
    )
})


module.exports = router
