const mongoose = require('mongoose');
const MessageSchema = require('../schemas/MessageSchema');

const MessageModel = mongoose.model('Message' , MessageSchema);



exports.MessageModel = MessageModel;
