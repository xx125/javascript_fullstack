<template>
  <div class="child">
    <h3>兄弟组件1(监听兄弟组件2)</h3>
    <div>
      <!-- 这是从父组件拿来的数据：{{title}} -->
    </div>
    <div>
      我是从child2拿来的数据：{{msg}}
    </div>
  </div>
</template>

<script>
import Bus from '@/assets/bus'
export default {
  // 1. props: ['title']    接收父组件的数据
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    Bus.$on('test', (data) => {
      this.msg = data
    })
  }
}
</script>

<style>

</style>