/**
 * json-server 模拟数据访问
 * 运行mock-server.js 文件来启动
 * node json-server/mock-server.js
 */

const jsonServer = require('json-server')

const $db = require('./db') // db.json。或返回db.json数据格式的，db.js文件

const server = jsonServer.create()

const middlewares = jsonServer.defaults()

const router = jsonServer.router($db)

server.use(router)

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
server.use(jsonServer.bodyParser)

server.listen(3000, () => {
  console.log('JSON Server is running at 3000')
})
