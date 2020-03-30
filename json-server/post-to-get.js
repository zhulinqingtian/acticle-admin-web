/**
 * json-server 模拟数据访问
 * post 请求转为 get
 * 将配置项写在命令行来启动
 * json-server --watch json-server/db.json --m json-server/post-to-get.js --routes json-server/mock-route.json --port 3000
 */

//  post-to-get.js
module.exports = function (req, res, next) {
  req.method = 'GET'
  next()
}
