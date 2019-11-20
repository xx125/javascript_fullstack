// *表示引入types里所有的export
// as表示重命名为types
import * as types from '../types'
const state = {
  showSidebar: false
}

// mutations的方法尽量不要直接放到页面上使用，先actions
const mutations = {
  [types.COM_SHOW_SIDE_BAR] (state, status) {
    // 不能写死true or false
    state.showSidebar = status
  }
}

const actions = {
  setShowSidebar ({commit}, status) {
    commit(types.COM_SHOW_SIDE_BAR, status)
  }
}

const getters = {
  // es6写法
  showSidebar: state => state.showSidebar
}

export default {
  state,
  getters,
  mutations,
  actions
}