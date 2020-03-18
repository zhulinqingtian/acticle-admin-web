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
  // 登录验证
  const token = Cookies.get('loginToken')
  const loginServerUrl = 'http://localhost:10020/login'

  if (to.path === '/login' && token) {
    console.log(1)
    next('/')
  } else if (token) {
    console.log(2)
    Utils.setTitle(to.meta.title)
    next()
  } else {
    console.log(3)
    window.location.href = loginServerUrl
  }
})

router.afterEach(() => {
  // document.querySelector('footer').style.display = 'block';
  window.scrollTo(0, 0)
})
