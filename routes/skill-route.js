var express = require('express')
var knex = require('../knex')
var router = express.Router()

// Get skill by id
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

// Insert new skill
router.post('/', function (req, res) {
  var row = req.body
  knex('skill')
    .insert(row)
    .returning('*')
      .then( () => {
        res.json(row);
      })
})

// Delete skill by id
// router.delete('/:id', function (req, res) {
//   let skillId = req.params.id
//   knex('skill_user')
//     .from('skill_user')
//     .where('skill_user.skill_id', skillId)
//     .join('skill_user', function () {
//       this.on('skill_user.id', 'endorse.skill_user_id')
//     })
//     .del()
//     .then( () => {
//       res.send('oie')
//     })
// })

module.exports = router
