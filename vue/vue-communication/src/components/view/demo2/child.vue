<template>
  <div class="child">
    <h2>子组件</h2>
    <p>从父组件接收到的数据是：</p>
    <div>
      string: <span class="red">{{sendMsg}}</span>
    </div>
    <div>
      number: <span class="red">{{sendNum}}</span>
    </div>
    <div>
      <ul class="red">
        <li v-for="item in sendObj" :key="item.id">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sendMsg: {
      type: String,
      required: true
    },
    sendNum: {
      type: Number,
      required: false
    },
    sendObj: {
      // 当子组件要被拿来循环，即要求父组件是数组 =》 当子组件要求父组件传来的值是特定数据类型时用
      // 声明验证类型，判断当前声明类型是否为数组。记住！！！可判断任意数据类型
      validator (val) {
        if (Object.prototype.toString.call(val) === "[object Array]" || 
            Object.prototype.toString.call(val) === "[object object]") {
              return true
        }
      }
    }
  }
}
</script>

<style>
.red {
  color: red;
}
</style>