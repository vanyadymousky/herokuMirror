var express = require('express');
var ArticleModel = require('../models/article.db');
var router = express.Router();

/* articles listing. */
router.get('/', function(req, res, next) {
    ArticleModel.find({}).exec(function(err, articles) {
        res.render('articles', {articles: articles, title: 'Articles'});
    });
});

router.get('/new', function(req, res, next) {
    res.render('articles-new', {title: 'Add new article'});
});

router.post('/new', function(req, res, next) {
    var newArticle = new ArticleModel({
        title: req.body.title,
        author: req.body.author,
        comments: [],
        text: req.body.text,
        likes_count: 0,
        createdAt: req.body.createdAt
    });

    newArticle.save(function(err) {
        if(err) {
            err.message = 'article validation failed';
            err.status = 400;
            next(err);
        } else {
            res.render('articles-new-success', {title: 'Article has been added'});
        }
    });
});

module.exports = router;
