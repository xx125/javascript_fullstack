<template>
  <div class="container">
    <h2>父组件</h2>
    <p>
      从子组件获取的消息为：
      <span class="red">{{msg}}</span>
    </p>
    <child v-on:message="getMsg"></child>
  </div>
</template>

<script>
import child from './child'
export default {
  data () {
    return {
      msg: ''
    }
  },
  components: {
    child
  },
  methods: {
    // 在绑定的方法里默认有一个参数e接收子组件发散的this.msg
    getMsg (e) {
      this.msg = e
    }
  }
}
</script>

<style>
.red {
  color: red;
}
</style>