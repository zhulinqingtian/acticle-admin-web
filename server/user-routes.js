/**
 * /user 部分的路由处理
 * 处理中间件和路由
 */

var ALLOWED_IPS = [
  '127.0.0.1',
  '10.0.0.141',
  '::1'
]

exports.setup = function setup (app) {
  app.use(function (req, res, next) {
    var userIsAllowed = ALLOWED_IPS.indexOf(req.ip) > -1
    if (userIsAllowed) {
      next()
    } else {
      res.status(401).send('Not authorized!')
    }
  })
  app.get('/users', function (req, res) {
    /* ... */
  })
  app.post('/users', function (req, res) {
    /* ... */
  })
  app.post('/users/add', function (req, res) {
    /* ... */
  })
  app.get('/users/delete', function (req, res) {
    /* ... */
  })
}
