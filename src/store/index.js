import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'


Vue.use(Vuex)

const state = {
  cartList: []
}

export default new Vuex.Store({
  state,
  // mutations 每个方法只做一件事
  mutations,
  actions,
  getters,


})
