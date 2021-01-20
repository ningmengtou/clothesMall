import Toast from "./Toast.vue"

const obj = {}

// 通过 Vue.use() 方法的对象会默认执行 install 方法
// install 方法会默认携带 Vue 参数
obj.install = function (Vue) {
  // 1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)

  // 2.new的方式，根据组件构造器创建一个组件对象
  const toast = new toastConstructor()

  // 3.把组件对象手动挂载都某个元素上
  toast.$mount(document.createElement('div'))

  // 4.通过$el创造节点添加到body上
  document.body.appendChild(toast.$el)

  // 5.把组件对象赋值到Vue原型上
  Vue.prototype.$toast = toast
}

export default obj