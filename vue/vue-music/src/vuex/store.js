import Vue from 'vue'
import Vuex from 'vuex'

import com from './modules/com'
import music from './modules/music'

Vue.use(Vuex)

export default new Vuex.Store({
  // 抛出从com.js引入的state和getters
  modules: {
    com,
    music
  }
})