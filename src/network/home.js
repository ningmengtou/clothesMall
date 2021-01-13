import { request } from 'network/request'

// 封装home页面的网络请求方法
export function getHomeMultidata() {
  return request({
    url: 'home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: 'home/data',
    params: {
      type,
      page
    }
  })
}