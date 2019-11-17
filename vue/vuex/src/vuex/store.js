import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 数据源
const state = {
  count: 1
}

// 修改数据源的方法，mutations里的方法是同步的
const mutations = {
  add (state, n) {
    state.count += n
  },
  reduce (state) {
    state.count--
  }
}

// 获取方法并抛出，action里的方法是支持异步的
const actions = {
  // 第一个参数一定要写，(context) = ({commit})
  addAction (context, status) {
    context.commit('add', status)
  },
  // reduceAction ({commit}) {
  //   commit('reduce')
  // }
  reduceAction ({commit}) {
    setTimeout(() => {
      commit('reduce')
    }, 3000)
    console.log('我比reduce先执行')
  }
}

// 获取数据源并修改的方法
const getters = {
  getCount: (state) => {
    return state.count + 100
  }
}

export default new Vuex.Store({
  state,
  // vuex里有一个mutations，mutations在上面定义完之后放进来才是vuex的变量
  mutations,
  getters,
  actions
})