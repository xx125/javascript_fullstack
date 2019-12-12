<template>
  <div ref="display"></div>
</template>

<script>
import Vue from 'vue'
export default {
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      html: '',
      js: '',
      css: '',
      component: ''
    }
  },
  methods: {
    // 封装组件，动态渲染vue文件
    getSource (source, type) {
      const regex = new RegExp(`<${type}[^>]*>`)
      let openingTag = source.match(regex)
      // 如果开标签不存在
      if (!openingTag) return ''
      else openingTag = openingTag[0]
      // template找到标签之后，从开标签的下标开始剪切+整个开标签的长度，剪切到闭标签
      return source.slice(source.indexOf(openingTag) + openingTag.length, source.lastIndexOf(`</${type}>`))
    },
    splitCode () {
      const script = this.getSource(this.code, 'script').replace(/export default/, "return")
      const style = this.getSource(this.code, 'style')
      const template = '<div id="app">' + this.getSource(this.code, "template") + '</div>'

      this.js = script
      this.css = style
      this.html = template
    },
    renderCode () {
      this.splitCode()
      if (this.html !== '' && this.js !== '') {
        // new Function把js里面要的代码片段传进去
        const parseStrToFunc = new Function(this.js)()

        // 定义template拿到template当中的代码模块
        parseStrToFunc.template = this.html
        const Component = Vue.entend(parseStrToFunc)
        // 手动挂载
        this.component = new Component().$mount()
        // 挂载到根DOM元素上
        this.$refs.display.appenChild(this.component.$el)
      }
    }
  },
  mounted () {
    this.renderCode()
  }
}
</script>

<style>

</style>