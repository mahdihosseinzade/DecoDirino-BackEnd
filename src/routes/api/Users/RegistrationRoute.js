const express = require('express')
const router = express.Router()
const UserController = require('../../../controllers/UserController')

router.post('/login', UserController.login);
router.post('/verify',UserController.verify)

module.exports = router
