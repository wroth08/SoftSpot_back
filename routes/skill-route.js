var express = require('express')
var knex = require('../knex')
var router = express.Router()

router.get('/:id', function (req, res) {
  let id = req.params.id
  knex.select('skill.name')
    .from('username')
    .where('username.id', id)
    .join('skill_user', function () {
      this.on('username.id', 'skill_user.username_id')
    })
    .join('skill', function () {
      this.on('skill_user.skill_id', 'skill.id')
    })
    .then( function (data) {
      res.json(data)
    })
})

router.post('/', function (req, res) {
  var row = req.body
  knex('skill')
    .insert(row)
    .returning('*')
      .then( () => {
        res.json(row);
      })
})

module.exports = router
