<template>
  <div class="child">
    <h2>子组件</h2>
    <p>The msg from father is:</p>
    <strong>{{sendMsg}}</strong>
    <p class="hr"></p>
    <p>The ChangeMsg from child is:</p>
    <strong>{{changeMsg}}</strong>
  </div>
</template>

<script>
export default {
  props: ['sendMsg'],
  computed: {
    changeMsg () {
      // toUpperCase：将字符串转为大写
      return this.sendMsg.toUpperCase()
    }
  }
}
</script>

<style>
.hr {
  margin: 50px 0;
}
</style>