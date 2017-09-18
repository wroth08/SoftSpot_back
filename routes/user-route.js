var express = require('express')
var knex = require('../knex')
var router = express.Router()

// Get all users
router.get('/', function (req, res) {
  knex.select('username.name', 'username.username', 'username.bio')
    .from('username')
    .then( data => {
      res.json(data)
    })
})

// Get user by id, with that user's skills and reviews
router.get('/:id', function (req, res) {
  let id = req.params.id
  knex.select('username.name', 'username.username', 'username.img', 'username.bio', 'skill.name', 'review.title', 'review.body', 'review.rating', 'tech.name', 'endorse.rating')
    .from('username')
    .join('skill_user', function () {
      this.on('username.id', 'skill_user.user_id')
    })
    .join('skill', function () {
      this.on('skill_user.skill_id', 'skill.id')
    })
    .join('review', function () {
      this.on('username.id', 'review.user_id')
    })
    .join('endorse', function () {
      this.on('skill_user.id', 'endorse.skil_user_id')
    })
    .join('tech', function () {
      this.on('review.tech_id', 'tech.id')
    })
    .then( (data) => {
      res.json(data)
    })
})

// Get all reviews by a particular user
router.get('/:id/reviews', function (req, res) {
  let id = req.params.id
  knex.select('review.id', 'review.title', 'review.body', 'review.rating', 'review.user_id', 'review.tech_id')
    .from('review')
    .join('user', function () {
      this.on('user.id', 'review.user_id')
    })
    .then( function (data) {
      res.json(data)
    })
})

// Get all skills of a particular user
router.get('/:id/skills', function (req, res) {
  let id = req.params.id
  knex.select('skill.id', 'skill.name', )
    .from('skill')
    .join('skill_user', function () {
      this.on('user.id', 'skill_user.user_id')
    })
    .join('skill', function () {
      this.on('skill_user.skill_id', 'skill.id')
    })
    .then( function (data) {
      res.json(data)
    })
})



module.exports = ('router')
