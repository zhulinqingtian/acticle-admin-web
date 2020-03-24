/**
 * /api 部分的路由处理
 * 处理中间件和路由
 */

var apiProxy = require('./controller/api-proxy-controller')

exports.setup = function setup (app) {
  app.post('/api/login', function (req, res, next) {
    console.log('query:', req.query)
    console.log('body:', req.body) // post请求参数
    console.log('param:', req.param)

    res.send({
      message: 'success',
      status: 'OK',
      data: req.body
    })
  })
  app.all('/api/*', apiProxy.proxy)
}
