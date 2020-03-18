// var auth = require('./auth')

exports.setup = function setup (app) {
  /**
   * view
   */
  // app.get(['/', '/view/*'], auth.checkAuthTokenForView)

  /**
   * login/logout token
   */
  // app.get('/login', auth.setAuthToken)

  // app.get('/logout', auth.toLogout)

  app.get(['/', '/view/*'], function (req, res, next) {
    next()
  })

  app.get('/login', function (req, res, next) {
    next()
  })

  app.get('/logout', function (req, res, next) {
    next()
  })
}
