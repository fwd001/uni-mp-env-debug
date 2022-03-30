import HllRequest from 'uni-request'

const request = new HllRequest()

/**
 * 设置全局配置
 */
request.setConfig((config) => {
  config.baseUrl = 'https://www.fastmock.site/mock/c0c17b60403db515070732194ce3bd58/hll_request_api'
  return config
})

/**
 * 请求之前拦截器
 */
request.interceptors.request.use(
  async (config) => {

    const commonParams = {
      token: 'bfdded'
    }
    
    config.params = { ...(config.params || {}), ...commonParams }

    return config
  },
  (config) => {
    return Promise.reject(config)
  }
)

/**
 * 请求之后拦截器
 */
request.interceptors.response.use(
  async (response) => {
    if (response.statusCode !== 200) {
      // 服务端返回的状态码不等于200，则reject()
      return Promise.reject(response)
    }
    switch (response.data.ret) {
      case 10001:
      case 10003:
        console.log('未登陆，跳转登录页面')
        break
    }
    return Promise.resolve(response.data)
  },
  (response) => {
    // 请求错误做点什么。可以使用async await 做异步操作
    return Promise.reject(response)
  }
)

export { request }

export default {
  install(Vue) {
    Vue.prototype.$request = request
    Vue.prototype.$http = request
  },
}
