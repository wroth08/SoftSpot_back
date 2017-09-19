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

router.post('/', function (req, res) {
  var row = req.body
  knex('review')
    .insert(row)
    .returning('*')
      .then( () => {
        res.json(row);
      })
})

router.delete('/:id', function (req, res) {
  let reviewId = req.params.id
  knex('review')
    .where('review.id', reviewId)
    .del()
    .then( () => {
      res.send('l;alsdkfja;kdjla;j')
    })
})


module.exports = router
