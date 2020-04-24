"use strict";

var express = require('express');

var router = express.Router();

var passport = require('passport');

var ArticleList = require('../../models/ArticleList');

router.get("/test", function (req, res) {
  res.json({
    msg: 'articleList works'
  });
});
router.get("/", passport.authenticate('jwt', {
  session: false
}), function (req, res) {
  ArticleList.find().then(function (articleList) {
    if (!articleList) {
      return res.status(404).json("没有任何内容");
    }

    res.json(articleList);
  })["catch"](function (err) {
    return res.status(404).json(err);
  });
});
router.post("/add", passport.authenticate('jwt', {
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

  new ArticleList(profileFields).save().then(function (articleList) {
    res.json(articleList);
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
  ArticleList.findOneAndUpdate({
    _id: req.params.id
  }, {
    $set: profileFields
  }, {
    "new": true
  }).then(function (articleList) {
    return res.json(articleList);
  })["catch"](function (err) {
    return res.json('编辑失败');
  });
});
router["delete"]("/delete/:id", passport.authenticate('jwt', {
  session: false
}), function (req, res) {
  ArticleList.findOneAndDelete({
    _id: req.params.id
  }).then(function (articleList) {
    articleList.save().then(function (articleList) {
      return res.json(articleList);
    });
  })["catch"](function (err) {
    return res.status(404).json('删除失败');
  });
});
module.exports = router;