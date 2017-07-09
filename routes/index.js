var express = require('express')
var router = express.Router()
var c_user = require('../controllers/c_user.js')

router.get('/', function(req, res) {
  res.status(200).send({title: 'Thanks For Using my-template', github: `http://github.com/erwinwahyura`})
})

router.post('/api/users', c_user.add_user) //done get user
router.get('/api/users', c_user.getAllUser) //done get user
router.get('/api/users/:_id', c_user.getUserById) //done
router.put('/api/users/:_id', c_user.update_user) //done edit user hash password
router.delete('/api/users/:_id', c_user.delete_user) //done

module.exports = router
