"use strict";var mongoose=require("mongoose"),Schema=mongoose.Schema,CommentListSchema=new Schema({textValue:{type:Array}});module.exports=ArticleList=mongoose.model("CommentList",CommentListSchema);