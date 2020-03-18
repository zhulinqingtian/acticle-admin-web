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
  const loginServerUrl = 'https://localhost:10021'
  const origin = window.location.origin
  const toLoginServerUrl = `${loginServerUrl}/login?service=${encodeURIComponent(origin +
    '/login?toPath=' + encodeURIComponent(to.path === '/login' ? '/' : to.fullPath))}`
  const qs = Utils.locationQuery() // /token?token=xxxxxx&toPath=/login

  if (to.path === '/login' && qs.toLoginServerUrl) {
    window.location.href = toLoginServerUrl
  } else if (qs.token && to.path === '/login') {
    next((qs.toPath === '/login' || qs.toPath === '/logout') ? '/' : qs.toPath)
  } else if (token) {
    Utils.setTitle(to.meta.title)
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    window.location.href = toLoginServerUrl
  }
})

router.afterEach(() => {
  // document.querySelector('footer').style.display = 'block';
  window.scrollTo(0, 0)
})
