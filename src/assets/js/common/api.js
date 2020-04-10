import axios from 'axios'

const apiServerUrl = window.location.protocol + '//' + window.location.host

// axios 配置
axios.defaults.timeout = 30000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.baseURL = apiServerUrl

// POST传参序列化
axios.interceptors.request.use(config => {
  if (config.method === 'post') {
    // 弃用
    // config.data = qs.stringify(config.data, {
    //   arrayFormat: 'indices',
    //   allowDots: true
    // });

    if (config.url !== (apiServerUrl + '/api/addExchangeGood') && config.url !== (apiServerUrl + '/api/saveOneExchangeGoodDetail')) {
      config.data = JSON.stringify(config.data)
    }
  }

  return config
}, error => {
  return Promise.reject(error)
})

// 返回状态判断
axios.interceptors.response.use(res => {
  console.log('========= axios.interceptors.response: ', res.data)

  if (res.data.status === 'ERR_SESSION_TIMEOUT' && res.data.message === '未登陆或登陆状态已失效！' && res.data.data) {
    window.location.href = res.data.data
    return true
  } else if (res.data.message === '您已退出登录。' && res.data.data) {
    window.location.href = res.data.data
    return true
  } else if (res.data.status !== 'OK') {
    return Promise.reject(res)
  }
  return res
}, error => {
  // console.log('axios.interceptors.response : error : ', error);

  return Promise.reject(error)
})

export function fetch (url, param = {}, method = 'get') {
  return new Promise((resolve, reject) => {
    const config = {
      method: method,
      url: url
    }
    if (method === 'get') {
      config.params = param
    } else {
      config.data = param
      config.headers = {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }

    console.log('config : ', config)
    axios(config)
      .then(response => {
        resolve(response.data.data)
      })
      .catch(error => {
        reject(error.data)
      })
  })
}

// vue压面发起请求，在api.js中找到对应的接口
// 请求数据在api.js中进行请求拦截，对请求的参数进行处理
// 服务端在api-routes.js中进行处理（返回接口数据）
// 返回数据在api.js中进行x响应拦截，对返回结果进行处理（判断是否请求成功）
export default {
  logout (param) {
    return fetch('/logout', param, 'get')
  },
  getUser (param) {
    return fetch('/getUser', param, 'get')
  },
  login (param) {
    return fetch('/api/login', param, 'post')
  },

  /**
   * 获取商品列表
   */
  getCommodityList (param) {
    return fetch('/api/getCommodityList', param, 'get')
  },
  /**
   * 获取用户列表
   */
  getClientList (param) {
    return fetch('/api/getClientList', param, 'get')
  },
  /**
   * 获取点赞用户列表
   */
  getAvatarList (param) {
    return fetch('/api/getAvatarList', param, 'get')
  }
}
