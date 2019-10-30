<template>
  <div class="mine">detail
    <p>{{ $route.params.id }}</p>
  </div>
</template>

<script>
  export default {
    created() {
      console.log(this.$route.params.id)
    }
  }
</script>

<style >   
</style>