<template>
  <div class="search-box">
    <i class="icon icon-search">&#xe638;</i>
    <input ref="query" type="text" v-model="query" class="box" :placeholder="placeholder">
    <i class="icon icon-dismiss" v-show="query">&#xe656;</i>
  </div>
</template>

<script>
import { debounce } from '@/common/util'
export default {
  props: {
    placeholder: {
      type: String,
      default: '搜索歌曲、歌手'
    }
  },
  data () {
    return {
      query: ''
    }
  },
  created () {
    this.$watch('query', debounce((newQuery) => {
      // 不要直接在这里写接口请求
      this.$emit('query', newQuery)
    }, 300))
  },
  methods: {
    blur () {
      this.$refs.query.blur()
    },
    clear () {
      this.query = ''
    },
    setQuery (query) {
      this.query = query
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../assets/css/function'
.search-box
  display flex
  align-items center
  box-sizing border-box
  width 100%
  padding 0 px2rem(8px)
  height px2rem(74px)
  background #2f3054
  border-radius 6px
  .icon-search 
    font-size 24px
    color #6b6a6a
  .box 
    flex 1
    margin 0 5px
    line-height px2rem(36px)
    background #2f3054
    color #fff
    font-size 14px
    outline 0
    &:placeholder 
      color hsla(0, 0%, 100%, 0.3)
  .icon-dismiss 
    font-size 20px
    margin-right px2rem(10px)
    color #6b6a6a
</style>
