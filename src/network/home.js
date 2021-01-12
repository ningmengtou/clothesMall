import { request } from 'network/request'

// 封装home页面的网络请求方法
export function getHomeMultidata() {
  return request({
    url: 'home/multidata'
  })
}
