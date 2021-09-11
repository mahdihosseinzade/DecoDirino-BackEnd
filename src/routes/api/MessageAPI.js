const express = require('express')
const router = express.Router()
const MessageController = require('../../controllers/MessageController');

router.post('/create-message',MessageController.createMessage);
router.get('/get-message',MessageController.getMessage);

module.exports = router;
