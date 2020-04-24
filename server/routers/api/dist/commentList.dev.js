"use strict";

var express = require('express');

var router = express.Router();

var passport = require('passport');

var CommentList = require('../../models/CommentList');

router.get("/test", function (req, res) {
  res.json({
    msg: 'CommentList works'
  });
});
router.get("/", function (req, res) {
  CommentList.find().then(function (CommentList) {
    if (!CommentList) {
      return res.status(404).json("没有任何内容");
    }

    res.json(CommentList);
  })["catch"](function (err) {
    return res.status(404).json(err);
  });
});
router.post("/add", function (req, res) {
  var profileFields = {};

  if (req.body.textValue) {
    profileFields.textValue = req.body.textValue;
  }

  new CommentList(profileFields).save().then(function (CommentList) {
    res.json(CommentList);
  })["catch"](function (err) {
    return res.json(err);
  });
});
router.post("/edit/:id", passport.authenticate('jwt', {
  session: false
}), function (req, res) {
  var profileFields = {};

  if (req.body.imgUrl) {
    profileFields.imgUrl = req.body.imgUrl;
  }

  if (req.body.title) {
    profileFields.title = req.body.title;
  }

  if (req.body.desc) {
    profileFields.desc = req.body.desc;
  }

  if (req.body.id) {
    profileFields.id = req.body.id;
  }

  if (req.body.Like) {
    profileFields.Like = req.body.Like;
  }

  if (req.body.Comment) {
    profileFields.Comment = req.body.Comment;
  }

  if (req.body.inputValue) {
    profileFields.inputValue = req.body.inputValue;
  }

  if (req.body.CommentList) {
    profileFields.CommentList = req.body.CommentList;
  }

  console.log(profileFields);
  CommentList.findOneAndUpdate({
    _id: req.params.id
  }, {
    $set: profileFields
  }, {
    "new": true
  }).then(function (CommentList) {
    return res.json(CommentList);
  })["catch"](function (err) {
    return res.json('编辑失败');
  });
});
router["delete"]("/delete/:id", function (req, res) {
  CommentList.findOneAndDelete({
    _id: req.params.id
  }).then(function (CommentList) {
    console.log(CommentList);
    res.json(CommentList); // CommentList.save().then(CommentList => res.json(CommentList))
  })["catch"](function (err) {
    return res.status(404).json('删除失败');
  });
});
module.exports = router;