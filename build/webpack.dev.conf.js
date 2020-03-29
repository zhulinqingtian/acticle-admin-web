'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin

    /**
     * HtmlWebpackPlugin:
     * (1)为html文件中引入的外部资源(如script、link),动态添加每次compile后的hash，防止引用缓存的外部文件问题
     *
     * (2)可以生成创建html入口文件，比如单页面可以生成一个html文件入口，配置N个html-webpack-plugin可以生成N个页面入口
     * github上有些关于htmlwebpackplugin的属性介绍
     *
     * 属性：
     * title：生成html文件的标题
     * filename：输出的html的文件名称
     * template：html模板所在的文件路径
     * inject：注入选项
     *    true：默认值，script标签位于html文件的 body 底部
     *    body：script标签位于html文件的 body 底部（同 true）
     *    head：script 标签位于 head 标签内
     *    false：不插入生成的 js 文件，只是单纯的生成一个 html 文件
     *
     * favicon：给生成的 html 文件生成一个 favicon。属性值为 favicon 文件所在的路径名
     * minify：对 html 文件进行压缩，minify 的属性值是一个压缩选项或者 false 。默认值为false, 不对生成的 html 文件进行压缩。
     *
     * hash：给生成的 js 文件一个独特的 hash 值，该 hash 值是该次 webpack 编译的 hash 值。默认值为 false 。
     * eg: <script type=text/javascript src=bundle.js?22b9692e22e7be37b57e></script>
     *
     * cache: 默认是true的，表示内容变化的时候生成一个新的文件。
     * showErrors：属性的默认值为 true ，也就是显示错误信息。（如果 webpack 编译出现错误，webpack会将错误信息包裹在一个 pre 标签内）
     *
     * chunks：主要用于多入口文件，当你有多个入口文件，那就会编译后生成多个打包后的文件，那么chunks 就能选择你要使用那些js文件
     * excludeChunks：引入js时排除掉一些js
     *
     */

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ]),
    new FriendlyErrorsPlugin()
  ]
})

module.exports = devWebpackConfig
