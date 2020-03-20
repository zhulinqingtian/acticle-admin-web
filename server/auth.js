var request = require('request')
const loginUrl = 'http://localhost:10020/login'

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
    if (!req.cookies) {
      req.cookies = {}
    }
    var loginUserName = req.cookies.loginUserName
    if (loginUserName) {
      next()
    } else {
      next('/login')
    }
  } catch (e) {
    res.redirect(loginUrl)
  }
  next()
}

// 写入 loginUserName
exports.setAuthToken = function (req, res, next) {
  console.log('login setAuthToken:', req.cookies)

  if (!req.cookies) {
    req.cookies = {}
  }
  var loginUserName = req.cookies.loginUserName
  if (loginUserName) {
    res.cookie('loginUserName', loginUserName)
    next('/')
  } else {
    next('/login')
  }
}

exports.toLogout = function (req, res, next) {
  try {
    var loginUserName = req.cookies.loginUserName
  } catch (e) {
    res.send(toLoginServerUrlData)
  }

  const option = {
    url: 'localhost:10021' + '/logout?loginUserName=' + loginUserName,
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
