var request = require('request')
const loginUrl = 'localhost:10020/login'

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

/**
 * 登陆校验
 */
exports.checkAuthTokenForView = function (req, res, next) {
  try {
    var loginToken = req.cookies.loginToken || 'passed'
    var user = {
      userName: 'admin',
      password: 'admin'
    }
  } catch (e) {
    res.redirect(loginUrl)
  }

  // todo 校验token有效性
  if (user && loginToken) {
    next()
  }
}

// 写入token
exports.setAuthToken = function (req, res, next) {
  const token = req.query.token

  if (token) {
    res.cookie('loginToken', token)
    res.redirect('/')
  } else {
    // res.redirect(loginUrl)
    next()
  }
}

exports.toLogout = function (req, res, next) {
  try {
    var loginToken = req.cookies.loginToken
  } catch (e) {
    res.send(toLoginServerUrlData)
  }

  const option = {
    url: 'localhost:10021' + '/logout?token=' + loginToken,
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
}
