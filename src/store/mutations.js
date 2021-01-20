export default {
  // 添加商品数量
  addNumber(state, goods) {
    goods.number++
  },
  // 添加商品
  addProduct(state, goods) {
    goods.checked = true
    state.cartList.push(goods)
  },
  // 修改商品 checked 属性
  changeChecked(state, iid) {
    let goods = state.cartList.find(item => item.iid == iid)
    goods.checked = !goods.checked
  },
  // 删除商品
  clearGoods(state,iid) {
    state.cartList = state.cartList.filter(item=>item.iid !== iid)
  }
}