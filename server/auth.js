var request = require('request')
var Cookies = require('js-cookie')
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
    // TODO loginUserName 未获取到
    var loginUserName = Cookies.get('loginUserName')
    if (loginUserName) {
      console.log('loginUserName:', loginUserName)
      next()
    } else {
      console.log('进入页面 没有用户')
      res.redirect('http://localhost:10020/login')
    }
  } catch (e) {
    console.log('进入页面 catch:', e)
    next('/login')
  }
}

exports.toLogout = function (req, res, next) {
  try {
    Cookies.remove('loginUserName')
  } catch (e) {
    res.send(toLoginServerUrlData)
  }
  res.send('登出成功')
}
