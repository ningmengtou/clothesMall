export default {
  addCart({ state, commit }, goods) {
    // 使用 promise 封装 addCart 让添加购物车成功后可以返回信息
    return new Promise((resolve, reject) => {
      let oldProduct = state.cartList.find(item => item.iid == goods.iid)
      if (oldProduct) {
        // oldProduct.number += 1
        commit('addNumber', oldProduct)
        resolve('商品数量加一')
      } else {
        goods.number = 1
        commit('addProduct', goods)
        resolve('商品添加至购物车')
      }
    })
  }
}