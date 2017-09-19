var express = require('express')
var knex = require('../knex')
var router = express.Router()

router.post('/', function (req, res) {
  var row = req.body
  knex('endorse')
    .insert(row)
    .returning('*')
      .then( () => {
        res.json(row);
      })
})

module.exports = router
