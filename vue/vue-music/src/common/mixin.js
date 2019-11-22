import { mapActions } from 'vuex'

export const searchMixin = {
  data () {
    return {
      query: ''
    }
  },
  methods: {
    onQueryChange (query) {
      // trim()处理带空格的情况
      this.query =  query.trim()
      // // 看效果用的
      // setTimeout(() => {
      //   this.saveSearch()
      // }, 1000)
    },
    blurInput () {
      this.$refs.searchBox.blur()
    },
    saveSearch (song) {
      this.$refs.searchBox.setQuery(song)
      this.saveSearchHistory(this.query)
    }, 
    ...mapActions ([
      'saveSearchHistory',
      'deleteSearchHistory',
      'clearSearchHistory'
    ])
  }
}