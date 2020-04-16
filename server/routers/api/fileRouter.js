const express = require('express');
const router = express.Router();

const multer = require('multer');
var upload = multer({
    storage: storage
});
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //指定文件路径
        db(null, '../../uploads')
    },
    filename: function (req, file, cb) {
        //指定文件名
        cb(null, 'aaa.jpg')
    }
})
router.post('/upload', upload.single('hehe'), (req, res) => {
    console.log(res.file)
    res.send('上传ok')
})
module.exports = router;
