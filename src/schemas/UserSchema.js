const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');

const userSchema = new mongoose.Schema({

    phoneNumber: {
        type: Number,
        unique: true,
        required: true,
        maxLength: 11,
        match: /^[0-9]+$/,
        index: true
    },

    verifyCode: {
        type: Number,
        maxlength:6,
        default:1,
        index:true
    },

    name: {
        type: String,
        default: '',
    },

    lastName:{
        type: String,
        default: ''
    },

    email:{
        type: String,
        default: '',
        unique: true,
    },

    userName:{
        type: String,
        default: '',
        unique: true,
    },

    gender:{
        type: String,
        default: '',
    },

    acceptRules:{
        type: Boolean,
        defaultValue: false
    },

    verified: {
        type: Boolean,
        defaultValue: false
    }
    ,

    avatar: {
        path: {
            type: String,
            default: '',
        },
        name: {
            type: String,
            default: '',
        }
    },

    access:{
        type: String,
        default: "admin"
    }
})

userSchema.methods.generateAuthToken = function () {
    return jwt.sign({
        id: this._id,
        phoneNumber: this.phoneNumber,
    }, config.get('privateKey'))
}

module.exports = userSchema;
