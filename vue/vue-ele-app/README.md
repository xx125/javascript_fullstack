# vue-ele-app

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


------------------------------------------------------------------------------------------------------

# 合并两个对象
  Object.assign({}, this.seller, res.data.data)


# 父组件给子组件传递数据
  <v-header :seller="seller"></v-header>

# 子组件接收父组件传来的数据  
  <script>
    export default {
      props: {
        seller: {
          type: Object,
          default: {}
        }
      }
    }
  </script>


# 不换行，超出打点
  white-space nowrap
  overflow hidden
  text-overflow ellipsis

# 拦腰对齐
  vertical-align middle

# 将一小块DOM结构铺满屏幕
  position fixed
  top 0
  left 0
  right 0
  bottom 0

# 背景色虚化
  backdrop-filter blur(10px)

# 同时控制所有的属性变化
  transition all 0.5s

# 容器在父容器中居中显示
  margin 0 auto

# 解决父容器高度塌陷
  overflow hidden

# 拼接
  数组：concat
  对象：assign
