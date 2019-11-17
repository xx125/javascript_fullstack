<template>
  <div class="count">
    <!-- $store是vue自带的，是在store.js里new Vuex.Store之后可用的，不是自己可命名的 -->
    {{count}}
    <!-- <button @click="add(5)">+</button> -->
    <button @click="addAction(1)">+</button>
    <!-- <button @click="reduce">-</button> -->
    <button @click="reduceAction">-</button>
    {{getCount}}
  </div>
</template>

<script>
import { mapState, mapMutations, maGetters, mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      // myCount: null
    }
  },
  // mounted只会执行一次
  // mounted () {
  //   this.myCount = this.$store.state.count
  // },

  // 只要数据源发生变化，computed就会执行
  // ×!!!computed: {
  //   myCount () {
  //     return this.$store.state.count
  //   }
  // },
  // mapState写在哪里取决于需求，如果变化不多可放在mounted里面
  computed: {
    // mapState({
    // myCount: state => state.count
    // =
    // myCount (state) {
    //   return state.count
    // }
    // =
    // computed: mapState(['count'])
    // =
    // computed: {
      ...mapState([
        'count'
      ]),
    ...mapGetters([
      'getCount'
    ])
  },
  methods: {
    // test () {
    //   this.myCount++
    // }

    // 将仓库中的方法结构到当前页面使用
    ...mapMutations([
      'add',
      'reduce'
    ]),
    ...mapActions([
      'addAction',
      'reduceAction'
    ])
  }
}
</script>

<style>

</style>