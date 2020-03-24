/**
 * 浏览器端
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

/**
 * 进入页面之前的验证
 * 如：验证是否登录
 */
router.beforeEach((to, from, next) => {
  // 登录验证
  const userName = Cookies.get('loginUserName')
  if (to.path === '/login' && userName) {
    // 已经登录,要去login页面，则跳到首页
    next('/')
  } else if (userName) {
    // 已经登录
    Utils.setTitle(to.meta.title)
    // 直接去目标地址
    next()
  } else {
    // 表示路由成功，直接进入to路由，不会再次调用router.beforeEach()
    next()
  }
})

router.afterEach(() => {
  // document.querySelector('footer').style.display = 'block';
  window.scrollTo(0, 0)
})
