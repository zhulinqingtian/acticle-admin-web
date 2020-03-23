var auth = require('./auth')
var apiProxy = require('./controller/api-proxy-controller')

exports.setup = function setup (app) {
  /**
   * login/logout token
   * // todo 加上不能进入页面
   */
  app.get(['/', '/view/*'], auth.checkAuthTokenForView)

  app.get('/login', function (req, res, next) {
    console.log('app get login')
    next()
  })
  app.get('/logout', auth.toLogout)

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
