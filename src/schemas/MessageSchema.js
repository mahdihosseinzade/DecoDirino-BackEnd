const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({

    name:{
        type:String,
        default:''
    },
    email:{
        type:String,
        default:'',
        required:true
    },
    message:{
        type:String,
        default:'',
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    user:{
        type:Object,
        ref:'User'
    }
});

module.exports = MessageSchema;
