import Vue from 'vue'
import axios from 'axios'

const vue = new Vue()

// axios配置
// 接口请求十秒没有请求回来数据的话会将当前请求掐断，不再请求
axios.defaults.timeout = 10000
// 设置当前基础的api地址
axios.defaults.baseURL = 'http://localhost:3000'
// 判断返回状态，响应拦截
axios.interceptors.response.use((res) => {
  if (res.data.code !== 200) {
    alert('网络异常')
    return Promise.reject(res)
  }
  return res
}, (error) => {    /* 第二个参数是当服务器后端出错时报错 */
  alert('网络异常')
})

export function fetchGet (url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {    /* 接口请求的第二个参数是详情页 */
      params: param
    })
    // axios源码中封装了promise方法，所以可以直接.then和.catch
    .then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
    .catch(error => {
      reject(error)
    })
  })
}

export default {
  // 用户登录
  Login (params) {
    return fetchGet('/login', params)
  },
  // banners
  BannerList () {
    return fetchGet('/banner')
  },
  // 歌单
  DiscList (params) {
    return fetchGet('/top/playList', params)
  },
  HotSearchKey () {
    return fetchGet('/search/hot')
  },
  MusicSearch (params) {
    return fetchGet('/search', params)
  },
  // 根据id获取歌曲的url
  MusicUrl (id) {
    return fetchGet('/song/url', {id}) 
  }
}