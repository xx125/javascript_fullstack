<template>
  <div class="header">
    header
    <Notification :visible="visible" title="通知" content="放假" />
  </div>
</template>

<script>
import Notification from './Notification'
export default {
  data () {
    return {
      visible: true
    }
  },
  mounted () {
    setTimeout(() => {
      this.visible = false
    }, 3000)
  },
  components: {
    Notification
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
}
</style>