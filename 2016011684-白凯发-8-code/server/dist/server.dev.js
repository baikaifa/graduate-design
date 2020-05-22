"use strict";

var express = require('express');

var mongoose = require('mongoose');

var bodyParser = require('body-parser');

var passport = require('passport');

var cookieParser = require('cookie-parser');

var app = express();

var server = require('http').Server(app);

var io = require('socket.io').listen(server).sockets;

var path = require('path');

var pathLib = require('path');

app.use(express["static"](path.join(__dirname, './static')));
var connectedUser = [];
io.on("connection", function (socket) {
  console.log("a user connected"); //login

  socket.on('login', function (name, callback) {
    // callback(true);
    connectedUser.push(name);
    updateUserName();
  }); //receive chat message

  socket.on('chat message', function (msg) {
    console.log(msg); //emit message data

    io.emit("output", msg);
  }); //disconnect

  socket.on('disconnect', function (user) {
    console.log('disconneted');
    connectedUser.splice(connectedUser.indexOf(user), 1);
    console.log(connectedUser);
    updateUserName();
  });

  function updateUserName() {
    io.emit('loadUser', connectedUser);
  }
});
app.get('/', function (req, res) {
  res.json('ok');
}); //文件管理-文件上传

app.post('/api/upload_file', function (req, res) {
  //新文件名
  //'./www/upload/dfb33662df86c75cf4ea8197f9d419f9' + '.png'
  var newName = req.files[0].path + pathLib.parse(req.files[0].originalname).ext;
  fs.rename(req.files[0].path, newName, function (err) {
    if (err) res.send('上传失败');else res.send('成功');
  }); //1.获取原始文件扩展名
  //2.重命名临时文件
}); //引入users.js

var users = require('./routers/api/users');

var profiles = require('./routers/api/profiles');

var headerList = require('./routers/api/headerList');

var detail = require('./routers/api/detail');

var home = require('./routers/api/home');

var homeList = require('./routers/api/homeList');

var topicList = require('./routers/api/topicList');

var articleList = require('./routers/api/articleList');

var recommendList = require('./routers/api/recommendList');

var fourList = require('./routers/api/fourList');

var loadMore = require('./routers/api/loadMore');

var fileRouter = require('./routers/api/fileRouter');

var commentList = require('./routers/api/commentList'); //使用body-parser中间件


app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: false,
  useUnifiedTopology: true
}));
app.use(bodyParser.json()); //passport初始化   初始化之后才能使用

app.use(passport.initialize());

require('./config/passport')(passport); //在这里引入后直接在config下的passport中写即可
// app.get("/", (req, res) => {
//     res.send("Hello World!");
// })
//使用routes


app.use("/api/commentList", commentList);
app.use("/api/users", users);
app.use('/api/profiles', profiles);
app.use('/api/headerList', headerList);
app.use('/api/detail', detail);
app.use('/api/home', home);
app.use('/api/homeList', homeList);
app.use('/api/topicList', topicList);
app.use('/api/articleList', articleList);
app.use('/api/fourList', fourList);
app.use('/api/recommendList', recommendList);
app.use('/api/loadMore', loadMore);
app.use('/api/fileRouter', fileRouter);
var port = process.env.PORT || 5000; //连接数据库
// var MongoClient = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/houtai'; //local表示数据库的名称
// const db=require('./config/keys').mongoURI;
// console.log(db);

mongoose.connect(url, {
  useNewUrlParser: true
}).then(function () {
  console.log('连接成功');
})["catch"](function (err) {
  return console.log(err);
});
server.listen(port, '0.0.0.0', function () {
  //0.0.0.0允许所有端口访问
  console.log("Server running on port ".concat(port));
}); // const User = mongoose.model('user', new mongoose.Schema({
//     user: { type: String }
// }))
// User.create({
//     name: 'imooc',
//     age: 18
// }, function (err, doc) {
//     if (!err) {
//         console.log(doc);
//     } else {
//         console.log(err);
//     }
// })
// app.get('/add', function (req, res) {
//     //增加数据
//     MongoClient.connect(url, function (err, client) {
//         //client参数就是连接成功之后的mongoclient(个人理解为数据库客户端)
//         if (err) {
//             console.log(err);
//             console.log('数据库连接失败');
//             return;
//         } else {
//             var db = client.db("houtai");
//             db.collection('user').insertOne({ 'name': 'lisi', "age": 10 }, function (error, result) {
//                 if (error) {
//                     console.log('增加数据失败');
//                     return;
//                 } else {
//                     res.send('增加数据成功');
//                     res.end();
//                 }
//                 // db.close();
//             })
//         }
//     })
// });

/*如何使用mongodb
1安装mongodb cnpm i mongodb --save-dev

2 var MongoClient=require('mongodb').MongoClient
定义url   var url ='mongodb://localhost:27017/test'  连接数据库的地址

3连接数据库
MongoClient.connect(url,function (err,db){

})
4实现增加修改删除
app.get('/add', function (req, res) {
    //增加数据
    MongoClient.connect(url, function (err, client) {
        //client参数就是连接成功之后的mongoclient(个人理解为数据库客户端)
        if (err) {
            console.log(err);
            console.log('数据库连接失败');
            return;
        } else {
            var db = client.db("houtai");
            db.collection('user').insertOne({ 'name': 'lisi', "age": 10 }, function (error, result) {
                if (error) {
                    console.log('增加数据失败');
                    return;
                } else {
                    res.send('增加数据成功');

                    res.end();
                }
                // db.close();
            })
        }
    })
});
*/