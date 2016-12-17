var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: ObjectId,
        required: true
    },
    comments: Array,
    text: {
        type: String,
        required: true
    },
    likes_count: {
        type: Number
    },
    createdAt: {
        type: Date,
        required: true
    }
});

module.exports = ArticleSchema;
