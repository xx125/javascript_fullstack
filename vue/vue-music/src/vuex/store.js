import Vue from 'vue'
import Vuex from 'vuex'

import com from './modules/com'

Vue.use(Vuex)

export default new Vuex.Store({
  // 抛出从com.js引入的state和getters
  modules: {
    com
  }
})