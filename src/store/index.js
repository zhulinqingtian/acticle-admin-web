// 全局状态管理目录
import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'
import role from './module/role'
import routerData from './module/routerData'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: Cookies.get('token')
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      Cookies.set('token', token, {expires: 1 / 24})
    }
  },
  actions: {
    setToken ({commit}, token) {
      return new Promise((resolve, reject) => {
        commit('setToken', token)
        resolve()
      })
    }
  },
  getters: {
    token: state => state.token,
    info: state => state.role.info,
    routers: state => state.routerData.routers,
    addRouters: state => state.routerData.addRouters
  },
  modules: {
    role,
    routerData
  }
})

export default store
