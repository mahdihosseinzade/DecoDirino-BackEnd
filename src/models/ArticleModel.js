const mongoose = require('mongoose');
const ArticleSchema = require('../schemas/ArticleSchema');

const ArticleModel = mongoose.model('Article' , ArticleSchema);

exports.ArticleModel= ArticleModel;
