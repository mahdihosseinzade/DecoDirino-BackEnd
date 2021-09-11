
const { ArticleModel } = require('../models/ArticleModel');


const ArticleController = {

    createArticle:async (req,res)=>{
        let reqArticle =req.body;
        let givArticle = new ArticleModel(reqArticle);

        try {
            await givArticle.save();
            res.send(givArticle)
        }
        catch (error){
            console.error(error.message)
            res.send(error.message)
        }
    },

    getArticle:async (req,res)=>{
        const Articles = await ArticleModel.find();
        res.send(Articles);
    },

    getSingelArtcle:async (req,res)=> {
        const Article = await ArticleModel.find({"_id":req.body.id})
        res.send(Article)
    }
}

module.exports = ArticleController;
