const router = require('express').Router()

const UserController = require('./controllers/UserController')

router.post('/users/create', UserController.create)
router.post('/users/login', UserController.login)

module.exports = router
