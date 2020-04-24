const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Create Schema
const CommentListSchema = new Schema({
    textValue: {
        type: Array
    }
})
module.exports = ArticleList = mongoose.model("CommentList", CommentListSchema)