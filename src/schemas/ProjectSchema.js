const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    _id:{
        type : String
    },

    subject:{
        type: String,
        default: ''
    },

    employer:{
        name:{
            type: String,
            default: ''
        },

        phoneNumber:{
            type: Number,
            unique: true,
            maxLength: 11,
            match: /^[0-9]+$/,
            index: true,
            required: true,
        },

        telephone:{
            type: Number,
            unique: true,
            maxLength: 11,
            match: /^[0-9]+$/,
            index: true,
            required: true,
        }
    },

    environment:{
        type: String,
        default: ''
    },

    style:{
        type: String,
        default: ''
    },

    area:{
        type: Number,
        default: ''
    },

    cost:{
        type: Number,
        default: ''
    },

    address:{
        type: String,
        default: ''
    },

    description:{
        type: String,
        default: ''
    },

    date:{
        type:Date,
        default:Date.now
    }
    ,
    user:{
        type:Object,
        ref:'User'
    }
});

module.exports = ProjectSchema;
