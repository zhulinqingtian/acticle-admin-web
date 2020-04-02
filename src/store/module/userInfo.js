import store from '../index'
import API from '../../assets/js/common/api'

export default {
  state: {
    user: '' // 每次刷新都要通过token请求个人信息来筛选动态路由
  },
  mutations: {
    getInfo (state, user) {
      state.user = user
      sessionStorage.setItem('user', JSON.stringify(store.getters.user))
    },
    setUser (state, options) {
      // 切换角色，测试权限管理
      state.user = options
      sessionStorage.setItem('user', JSON.stringify(store.getters.user))
    },
    getUserInfo ({ commit }) {
      return API.getUser().then(response => {
        commit('user', response)
      })
    }
  },
  actions: {
    getInfo ({commit}, token) {
      commit('getInfo', token)
    },
    setUser ({commit}, options) {
      // 权限测试
      commit('setUser', options)
    }
  }
}
