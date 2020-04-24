const express = require('express');
const router = express.Router();
const passport = require('passport');
const CommentList = require('../../models/CommentList');

router.get("/test", (req, res) => {
    res.json({ msg: 'CommentList works' })
})

router.get("/", (req, res) => {
    CommentList.find()
        .then(CommentList => {
            if (!CommentList) {
                return res.status(404).json("没有任何内容")
            }
            res.json(CommentList);
        }).catch(err => res.status(404).json(err));
})

router.post("/add", (req, res) => {
    const profileFields = {};
    if (req.body.textValue) { profileFields.textValue = req.body.textValue; }
    new CommentList(profileFields).save().then(CommentList => {
        res.json(CommentList)
    }).catch(err => res.json(err));
});

router.post("/edit/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
    const profileFields = {};
    if (req.body.imgUrl) { profileFields.imgUrl = req.body.imgUrl; }
    if (req.body.title) { profileFields.title = req.body.title; }
    if (req.body.desc) { profileFields.desc = req.body.desc; }
    if (req.body.id) { profileFields.id = req.body.id; }
    if (req.body.Like) { profileFields.Like = req.body.Like; }
    if (req.body.Comment) { profileFields.Comment = req.body.Comment; }
    if (req.body.inputValue) { profileFields.inputValue = req.body.inputValue; }
    if (req.body.CommentList) { profileFields.CommentList = req.body.CommentList; }
    console.log(profileFields);
    CommentList.findOneAndUpdate(
        { _id: req.params.id },
        { $set: profileFields },
        { new: true }
    ).then(CommentList => res.json(CommentList))
        .catch(err => res.json('编辑失败'))
});

router.delete("/delete/:id", (req, res) => {
    CommentList.findOneAndDelete({ _id: req.params.id }).then(CommentList => {
        console.log(CommentList)
        res.json(CommentList)
        // CommentList.save().then(CommentList => res.json(CommentList))
    })
        .catch(err => res.status(404).json('删除失败'));
})
module.exports = router;


