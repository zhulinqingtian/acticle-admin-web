/**
 * 浏览器端（前端服务端）
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookies from 'js-cookie'
import {appRouter} from './web-router'
import Utils from '../assets/js/utils'

Vue.use(VueRouter)

// 路由配置
const RouterConfig = {
  mode: 'history',
  routes: appRouter
}

/* eslint import/prefer-default-export: 0 */
export const router = new VueRouter(RouterConfig)

router.beforeEach((to, from, next) => {
  // 登录验证 token:1
  const userName = Cookies.get('loginUserName')

  if (to.path === '/login' && userName) {
    console.log(1)
    next('/')
  } else if (userName) {
    console.log(2)
    Utils.setTitle(to.meta.title)
    next()
  } else {
    console.log(3)
    next()
  }
})

router.afterEach(() => {
  // document.querySelector('footer').style.display = 'block';
  window.scrollTo(0, 0)
})
