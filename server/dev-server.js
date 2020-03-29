var webpack = require('webpack')
var express = require('express')
var app = express()
var path = require('path')
var ejs = require('ejs')
var favicon = require('serve-favicon')
var bodyParser = require('body-parser')
var logger = require('morgan') // 日志模块
var fs = require('fs') // 文件模块

var type = process.env.NODE_ENV === 'development' ? 'dev' : 'build'
var config = require('../config/index')[type]
var port = config.port

// 设置node环境变量
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.env.NODE_ENV)
}

// 设置后端路由（接口）
// 按模块划分出路由
const apiRoutes = require('./api-routes')
const userRoutes = require('./user-routes') // user 部分的路由处理

// 设置webpack配置文件
var webpackConfig = (process.env.NODE_ENV === 'testing' || process.env.NODE_ENV === 'production')
  ? require('../build/webpack.prod.conf')
  : require('../build/webpack.dev.conf')
var compiler = webpack(webpackConfig)

// 设置模板目录
app.set('views', path.join(__dirname, '../'))

// 设置引擎
app.set('view engine', 'html')
app.engine('.html', ejs.__express)

// 给网站设置图标favicon.ico
app.use(favicon(path.join(__dirname, '../src/assets/img/favicon.ico')))

// 在终端打印日志 （状态码带有色彩的日志输出）
app.use(logger('dev'))

// 设置post处理
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// 设置静态资源所在目录
app.use(express.static(path.join(__dirname, '../static')))
app.use(express.static(path.join(__dirname, '../src/assets')))

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'}) // 创建一个写入流
app.use(logger('combined', {stream: accessLogStream})) // 将日志写入文件

// 将路由挂载到express实例上
apiRoutes.setup(app)
userRoutes.setup(app)

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({action: 'reload'})
    cb()
  })
})
// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

app.listen(port)

console.log('> Starting dev server at ' + port + '...')
