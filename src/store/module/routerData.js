import {appRouter} from '@/router/web-router'
console.log('data:', appRouter)
const routerData = {
  state: {
    routers: []
  },
  mutations: {
    setRouters: (state, routers) => {
      state.routers = routers // 保存动态路由用来addRouter
    }
  },
  actions: {
    getRoutes ({commit}) {
      commit('setRouters', appRouter)
    },
    newRoutes ({commit}) {
      //  通过递归路由表，删除掉没有权限的路由
      function eachSelect (routers) {
        for (let j = 0; j < routers.length; j++) {
          if (routers[j].meta) {
            routers.splice(j, 1)
            j = j !== 0 ? j - 1 : j
          }
          if (routers[j].children && routers[j].children.length) {
            eachSelect(routers[j].children)
          }
        }
      }

      // 拷贝这个数组是因为做权限测试的时候可以从低级切回到高级角色，仅限演示，正式开发时省略这步直接使用 appRouter
      // 仅限演示
      let newArr = [...appRouter]
      eachSelect(newArr)
      commit('setRouters', newArr)

      // 正式开发
      // eachSelect(appRouter)
      // commit('setRouters', appRouter)
    }
  }
}

export default routerData
