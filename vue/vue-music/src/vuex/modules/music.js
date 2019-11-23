import * as types from '../types'
import { findIndex } from '@/common/util'

const state = {
  playing: false,
  fullScreen: false,
  playList: [],
  // 当前播放列表中的哪一首歌
  currentIndex: -1,
  favoriteList: [],
  playHistory: []
}

const mutations = {
  [types.SET_PLAYLIST] (state, playlist) {
    state.playList = playlist
  },
  [types.SET_CURRENT_INDEX] (state, index) {
    state.currentIndex = index
  }
}

const actions = {
  // 选择音乐播放
  selectPlaySong ({commit, state}, song) {
    // slice里面没有放参数，默认切割整个数组
    let playlist = state.playList.slice()
    let currentIndex = state.currentIndex
    // 查找当前列表中是否有待插入的歌曲并返回其索引
    let fpIndex = findIndex(playlist, song)
    // 如果已经包含这首歌
    if (fpIndex > -1) {
      // 拿到原本的下标给正在播放
      currentIndex = fpIndex
    } else {
      // 如果不包含这首歌，加入播放列表
      playlist = [song, ...playlist]
      currentIndex = 0
    }
    // 把歌曲放入播放列表
    commit(types.SET_PLAYLIST, playlist)
    commit(types.SET_CURRENT_INDEX, currentIndex)
  },
  addPlayList ({commit, state}, song) {
    let playlist = [...state.playList.slice(), song]
    if (playlist.length === 1) {
      let currentIndex = state.currentIndex
      currentIndex++
      commit(SET_CURRENT_INDEX, currentIndex)
    }
    commit(types.SET_PLAYLIST, playlist)
  }
}

const getters = {
  currentSong: state => {
    return state.playList[state.currentIndex] || {}
  },
  playList: state => state.playList
}

export default {
  state,
  mutations,
  actions,
  getters
}