/**
 * json-server 模拟数据访问
 *
 */

//  mock-server.js

const jsonServer = require('json-server')

const $db = require('./db') // db.json。或返回db.json数据格式的，db.js文件

const $routeHandler = require('./mock-route') // 引入自定义路由配置文件

const server = jsonServer.create()

const middlewares = jsonServer.defaults()

// 路由格式处理。需要加在 server.use(router) 前
server.use(jsonServer.rewriter($routeHandler($db)))

const router = jsonServer.router($db)

server.use(router)

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
server.use(jsonServer.bodyParser)

server.listen(3000, () => {
  console.log('JSON Server is running at 3000')
})
