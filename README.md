# article-admin-web

> article-admin-web(node+express+vue-cli)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

[element-ui](https://element.eleme.cn/#/zh-CN/component/popconfirm)

[浅谈vue-resource和vue-axios的区别](https://www.jianshu.com/p/0af72c351d48)

### scripts
初始化项目时，启动直接使用 webpack.dev.conf.js 文件.
```json
{
    "scripts": {
        "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
        "start": "npm run dev",
        "unit": "jest --config test/unit/jest.conf.js --coverage",
        "e2e": "node test/e2e/runner.js",
        "test": "npm run unit && npm run e2e",
        "lint": "eslint --ext .js,.vue src test/unit test/e2e/specs",
        "build": "node build/build.js"
    }
}
```
现在更改为将服务配置到server/dev-server中，并执行此文件。(在此文件中使用 webpack.dev.conf.js 配置)
```json
{
  "dev": "cross-env NODE_ENV=development node server/dev-server.js"
}
```

### cross-env使用
windows不支持NODE_ENV=development的设置方式。

cross-env包能够`提供一个设置环境变量的scripts`，让你能够以unix方式设置环境变量，然后在windows上也能兼容运行。

安装： npm install --save-dev cross-env

使用：
```json
{
  "scripts": {
    "build": "cross-env NODE_ENV=production webpack --config server/webpack.prod.conf.js"
  }
}
```

设置：
NODE_ENV环境变量将由cross-env设置

打印process.env.NODE_ENV === 'production '

### 热加载
webpack-dev-middleware
webpack-hot-middleware

### express中间件--Morgan
Morgan是一个node.js关于http请求的日志中间件

npm install morgan --save

在终端打印日志:
```javascript
var logger = require('morgan');
app.use(logger('dev')); // 状态码带有色彩的日志输出
```

每次http请求，express实例都会输出日志，并且使用一致的格式:
```
GET / 200 338.136 ms - 170
POST / 404 60.506 ms - 1225
GET /users 200 2.432 ms - 23
POST /users 404 43.958 ms - 1225
```

将日志写入文件:
```javascript
var express = require('express');
var logger = require('morgan');//日志模块
var fs = require('fs');//文件模块

var app = express();
// 创建一个写文件流，并且保存在当前文件夹的access.log文件中
var accessLogStream = fs.createWriteStream(__dirname+'/access.log',{flags:'a'});
// 设置开启文件流，并且指明文件流的对象 (将日志写入文件)
app.use(logger('combined',{stream:accessLogStream}));
app.get('/',function(req,res){
  res.send('hello world');
})


app.listen(3000);
```

### this.$route 和 this.$router
this.$route  表示当前正在用于跳转的路由器对象，可以调用其name、path、query、params等属性；

this.$router是Vue-Router的实例，需要导航到不同路由则用 `this.$router.push` 方法
全局路由对象,任何页面都可以调用 push()、 go()等方法


## json-server

### 一、安装
npm install json-server --save

### 二、配置
在package.json的scripts中新增命令配置，默认3000端口
```json
{
  "json:server": "json-server --watch json-server/db.json"
}
```
// 修改json-server运行的端口
```json
{
  "json-server": "json-server --watch --port 3001 db.json"
}
```

### 三、使用json-server支持的功能，尝试进行数据访问

mock的服务要开启
start的服务也要开启

```javascript 1.8
// http://localhost:3000/db  -- 访问db.json
// http://localhost:3000/posts
// http://localhost:3000/comments
// http://localhost:3000/profile
// http://localhost:3000/users
// http://localhost:3000/companies
// http://localhost:3000/getCommodityList

```

```json
{
  "testData": [
      {
        "id": "001",
        "name": "张三"
      },
      {
        "id": "002",
        "name": "喵喵"
      },
      {
        "id": "002",
        "name": "Sherry"
      }
    ]
}
```

http://localhost:3000/testData/001
```json
{  "id": "001", "name": "张三" }
```

（4）自定义路由

可使用单独的route.json文件，进行自定义路由。（类似于代理转发，拦截请求，并重定向访问

```json
{

    "/data/*": "/$1",  // /data/data1 ==> /data1

    "/:resource/:id/show": "/:resource/:id",  // /data1/001/show ==> /data1/001

    "/data1/:name": "/data1?name=:name", //  /data1/Sherry ==> /data1?name=Sherry

    "/:anyArray\\?id=:id": "/:anyArray/:id" //  /data1?id=002 ==> /data/002
}
```



### TODO

-[x] 热加载
-[x] 静态资源处理
-[x] css预处理器使用（sass）
-[ ] history
-[x] 封装axios请求 - 接口处理
-[x] 路由处理
-[x] 代理
-[ ] 登录验证
-[ ] store存储
-[x] [使用json-server做mock假数据](https://www.jianshu.com/p/961c963bec35)
-[] 添加指令


