"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema; //Create Schema

var CommentListSchema = new Schema({
  textValue: {
    type: Array
  }
});
module.exports = ArticleList = mongoose.model("CommentList", CommentListSchema);