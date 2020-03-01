const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  // app.use(proxy('/yunYing', {
  //   target: "http://192.168.1.102:3204",
  //   changeOrigin: true,
  //   secure: false,
  //   pathRewrite: {
  //     "^/yunYing": ""
  //   }
  // }))
}