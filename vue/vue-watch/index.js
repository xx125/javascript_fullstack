(function () {
  var o = {a: 1}
  Object.defineProperty(o, 'b', {
    get () {
      return this.a
    },
    set (newVal) {
      this.a = newVal
    },
    // 设置当前b属性可以再次配置
    configurable: true
  })

  console.log(o.b)
  o.b = 2
  console.log(o.b)
})()