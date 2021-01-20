import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入自定义的 Toast 插件
import Toast from 'components/common/Toast/index.js'
// 引入 fastclick 
import fastClick from "fastclick"
// 引入图片懒加载库
import VueLazyLoad from 'vue-lazyload'

// 通过 Vue.use() 使用插件
Vue.use(Toast)

Vue.config.productionTip = false

// 在vue原型上新建一个Vue实例 当做事件总线
Vue.prototype.$bus = new Vue()

// 解决移动端300ms问题
fastClick.attach(document.body)

// 使用图片懒加载插件 使用懒加载需要把图片的 src 属性改为 v-lazy
Vue.use(VueLazyLoad)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
 