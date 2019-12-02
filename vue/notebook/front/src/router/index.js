import Vue from 'vue'
import Router from 'vue-router'
import StarNotes from '@/components/StarNotes'
import StarBanner from '@/components/StarBanner/StarBanner'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StarNotes',
      component: StarNotes,
      // 配置页面的title
      meta: {
        title: '星辰笔记'
      }
    },
    {
      path: '/StarBanner',
      name: 'StarBanner',
      component: StarBanner,
      meta: {
        title: '欢迎'
      }
    }
  ]
})
