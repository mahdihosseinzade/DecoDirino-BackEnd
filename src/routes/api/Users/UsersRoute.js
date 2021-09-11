const express = require('express')
const router = express.Router()
const UserController = require('../../../controllers/UserController')
const multer  = require('multer')
const upload = multer({ dest: 'public/images/avatars' })

 router.get('/profile', UserController.getUserInfo)
 router.put('/set-info', upload.single('avatar'), UserController.setInfo)

module.exports = router;
