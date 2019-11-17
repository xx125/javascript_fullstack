<template>
  <div class="child">
    <h3>兄弟组件2(传递状态(数据)给兄弟组件1)</h3>
    <div>
      <button @click="sendMsg">send message</button>
    </div>
  </div>
</template>

<script>
import Bus from '@/assets/bus'
export default {
  data () {
    return {
      title: '我是child2的数据'
    }
  },
  methods: {
    sendMsg () {
      // 1. this.$emit('test', this.title)
      Bus.$emit('test', this.title)
      // Bus是Vue的实例，Vue有.emit方法则Bus也有
    }
  }
}
</script>

<style>

</style>