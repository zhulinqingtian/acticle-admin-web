var request = require('request')

let config = global.My_CONF
var homePage = config.homePage
const loginUrl = `localhost/login?service=${encodeURIComponent(homePage + '/login?toPath=/')}`

var toLoginServerUrlData = {
  status: 'ERR_SESSION_TIMEOUT',
  message: '未登陆或登陆状态已失效！',
  data: loginUrl
}

var toLogoutServerUrlData = {
  status: 200,
  message: '您已退出登录。',
  data: loginUrl
}

exports.setup = function setup (app) {
  /**
   * login/logout token
   */
  app.get('/login', function (req, res, next) {
    const token = req.query.token
    const toPath = req.query.toPath

    if (token) {
      res.cookie('shomopAdminToken', token)
      res.redirect(toPath)
    } else {
      res.redirect(loginUrl)
    }
  })
  app.get('/logout', function (req, res, next) {
    try {
      var shomopAdminToken = req.cookies.shomopAdminToken
    } catch (e) {
      res.send(toLoginServerUrlData)
    }

    const option = {
      url: 'localhost' + '/logout?token=' + shomopAdminToken,
      method: 'GET'
    }

    request(option, function (err, response, body) {
      if (err) {
        res.send('服务器内部错误！')
        return
      }
      if (response.statusCode !== 200) {
        res.send('服务器内部错误！')
        return
      }

      const result = JSON.parse(body)
      const code = result.code

      if (code === 200) {
        res.send(toLogoutServerUrlData)
      } else {
        res.send(body)
      }
    })
  })
}
