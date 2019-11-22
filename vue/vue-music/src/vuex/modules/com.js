// *表示引入types里所有的export
// as表示重命名为types
import * as types from '../types'
const state = {
  showSidebar: false,
  searchHistory: ['123', 'dada']
}

// mutations的方法尽量不要直接放到页面上使用，先actions
const mutations = {
  [types.COM_SHOW_SIDE_BAR] (state, status) {
    // 不能写死true or false
    state.showSidebar = status
  },
  [types.COM_SAVE_SEARCH_HISTORY] (state, status) {
    // 不能写死true or false
    state.searchHistory = status
  },
  [types.COM_DELETE_SEARCH_HISTORY] (state, index) {
    state.searchHistory.splice(index, 1)
  },
  [types.COM_CLEAR_SEARCH_HISTORY] (state) {
    // 清空搜索历史
    state.searchHistory = []
  }
}

const actions = {
  setShowSidebar ({commit}, status) {
    commit(types.COM_SHOW_SIDE_BAR, status)
  },
  saveSearchHistory ({commit, state}, query) {
    let searchHistory = [query, ...state.searchHistory.slice()]
    // 数组去重
    searchHistory = [...new Set(searchHistory)]
    commit(types.COM_SAVE_SEARCH_HISTORY, searchHistory)
  },
  deleteSearchHistory ({commit}, index) {
    commit(types.COM_DELETE_SEARCH_HISTORY, index)
  },
  clearSearchHistory ({commit}) {
    commit(types.COM_CLEAR_SEARCH_HISTORY)
  }
}

// 取值出来用
const getters = {
  // es6写法
  showSidebar: state => state.showSidebar,
  searchHistory: state => state.searchHistory
}

export default {
  state,
  getters,
  mutations,
  actions
}