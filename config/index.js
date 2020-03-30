'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
const extend = require('xtend')

var config = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': 'http://localhost:3000'
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 10020, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    homePage: 'http://localhost:10020',
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    port: 10020,
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    /**
     * 打包后左右文件存放的目录名及路径
     */
    assetsRoot: path.resolve(__dirname, '../dist'),

    /**
     * assetsSubDirectory：
     * 配置打包后在dist目录中, 除了 index.html 之外的静态资源要存放的路径
     * 打包时，通过 CopyWebpackPlugin 插件将静态资源copy到这里
     */
    assetsSubDirectory: 'static-assets',

    /**
     * assetsPublicPath:
     * 代表打包后，index.html里面引用资源的的相对地址
     */
    assetsPublicPath: '/',

    proxyTable: {
      '/api': 'http://localhost:3000'
    },

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
    homePage: 'http://localhost:10020',
  }
}


var configName = process.env.NODE_ENV === 'production' ? 'build' : 'dev';
global.My_CONF = extend(global.My_CONF, config[configName]);

module.exports = config;
