class watcher {
  constructor (opts) {
    this.$data = opts.data
    this.$watch= opts.watch
    // 把数据源里存在的值全部取出来
    for (let key in opts.data) {
      this.setData(key, opts.data[key])
    }
  }

  setData (_key, _val) {
    // Object.defineProperty(this)，this把上下文指向当前的对象
    Object.defineProperty(this, _key, {
      get () {
        // return key的value值
        return this.$data[_key]
      },
      set (val) {
        // const oldVal = _val
        const oldVal = this.$data[_key]
        if (oldVal === val)  return val
        this.$data[_key] = val
        // watch里的方法，方法名和数据源里的字段是一样的
        this.$watch[_key] && typeof this.$watch[_key] === 'function' && (
          // 防止作用域被修改
          this.$watch[_key].call(this, val, oldVal)
        )
        return val
      }
    })
  }
}


// let vm = new watcher({
//   data: {
//     a: 0,
//     b: 'hello'
//   },
//   watch: {
//     a (newVal, oldVal) {
//       console.log(oldVal, newVal)
//     }
//   }
// })

// setTimeout(() => {
//   vm.a = 1
// }, 1000);