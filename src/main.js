// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import VueResource from 'vue-resource'

// 可以使用部分组件
// import {Button} from 'element-ui'
// Vue.use(Button)

// element 插件较大，我们项目也就引用一些常用组件。可以只引入需要的组件，以达到减小项目体积的目的
import ElementUI from 'element-ui'
Vue.use(ElementUI)
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
