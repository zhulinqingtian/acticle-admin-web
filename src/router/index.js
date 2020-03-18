import Vue from 'vue'
import VueRouter from 'vue-router'
import {appRouter} from './web-router'

Vue.use(VueRouter)

// 路由配置
const RouterConfig = {
  mode: 'history',
  routes: appRouter
}

/* eslint import/prefer-default-export: 0 */
export const router = new VueRouter(RouterConfig)

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach(() => {
  // document.querySelector('footer').style.display = 'block';
  window.scrollTo(0, 0)
})
