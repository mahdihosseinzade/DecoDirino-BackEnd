const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    _id:{
        type:"Number",
        required:true
    },
    subject:{
        type:String,
        default:'',
        required:true
    },

    shortText:{
        type:String,
        default:'',
        required:true
    },

    longText:{
        type:String,
        default:'',
        required:true
    },

    img:{
        smImg:{
            type:String,
        },
        lgImg:{
            type:String,

        }
    },

    date:{
        type:Date,
        default:Date.now
    },

    tags:[String],

    user:{
        type:Object,
        ref:'User',
    }

});

module.exports = ArticleSchema;
