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

### TODO

-[x] 热加载
-[x] 静态资源处理
-[ ] css预处理器使用
-[ ] 封装axios请求 - 接口处理
-[x] 路由处理
-[ ] 代理
-[ ] 登录验证
-[ ] store存储
-[ ] [使用json-server做mock假数据](https://www.jianshu.com/p/961c963bec35)



