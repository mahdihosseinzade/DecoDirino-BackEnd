const express = require('express')
const router = express.Router()
const ArticletController = require('../../controllers/ArticleController');

router.post('/create-article',ArticletController.createArticle);
router.get('/get-article',ArticletController.getArticle);
router.get('/get-single-article/:id',ArticletController.getSingelArtcle);
module.exports = router;
