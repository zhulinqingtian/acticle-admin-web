'use strict'

// var request = require('request')

var apiServerUrl = global.My_CONF.proxyTable['/api']

function isJson (req) {
  var str = req.headers['content-type'] || ''
  var contentType = str.split(';')[0]
  return (contentType === 'application/json')
}

exports.proxy = function (req, res) {
  var method = req.method
  var options = {
    url: apiServerUrl + req.path.replace('/api', ''),
    method: method
  }

  if (!req.cookies) {
    req.cookies = {}
  }
  var userName = req.cookies.name

  if (userName) {
    if (method === 'POST') {
      if (isJson(req)) {
        options.json = true
        options.body = req.body
      } else {
        options.form = req.body
      }
    } else {
      options.qs = req.query
    }
  } else {
    if (method === 'POST') {
      if (isJson(req)) {
        options.json = true
        options.body = req.body
      } else {
        options.form = req.body
      }
    } else {
      options.qs = req.query
    }
  }

  /**
   * ===================================================
   * 数组参数处理qsStringifyOptions：https://github.com/request/request#requestoptions-callback
   * ===================================================
   * qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'brackets' });  // 'a[]=b&a[]=c'
   */
  // options.qsStringifyOptions = {arrayFormat: 'brackets'};

  // toRequest (options, res)
}

// java端发起请求
// function toRequest (options, res) {
//   request(options, function (err, response, body) {
//     if (err) {
//       res.send('发生错误')
//       return
//     }
//     if (response.statusCode !== 200) {
//       res.send('发生错误')
//       return
//     }
//     res.send(body)
//   })
// }
