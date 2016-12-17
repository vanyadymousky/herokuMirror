var mongoose = require('mongoose');
var ArticleSchema = require('../schemas/article.schema');

var mongodbUri = 'mongodb://artsiom_peshko:12345678@ds131878.mlab.com:31878/news';
mongoose.connect(mongodbUri);

var ArticleModel = mongoose.model('articles', ArticleSchema);

module.exports = ArticleModel;
