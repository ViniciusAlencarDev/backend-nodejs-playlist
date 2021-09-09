const router = require('express').Router()
const { verifyToken } = require('./modules/jwt')

const UserController = require('./controllers/UserController')

router.post('/users/create', UserController.create)
router.post('/users/login', UserController.login)
router.post('/users/teste', verifyToken, (req, res) => res.json({ success: true, data: ["chegou aqui"] }))

module.exports = router
