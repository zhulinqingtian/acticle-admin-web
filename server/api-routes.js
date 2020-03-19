var auth = require('./auth')
var apiProxy = require('./controller/api-proxy-controller')

exports.setup = function setup (app) {
  /**
   * login/logout token
   * // todo 加上不能进入页面
   */
  // app.get('/login', auth.setAuthToken)

  app.get('/logout', auth.toLogout)

  app.all('/api/*', apiProxy.proxy)
}
