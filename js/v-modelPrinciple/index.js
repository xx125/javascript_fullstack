const a = {
  b: 1
}

function fn() {
  console.log('a的值发生改变了', a.b)
}

function bindData() {
  Object.keys(a).map(key => {
    let v = a[key]

    // 监听对象的变化，设置或修改对象的属性，参数：(要监听的对象, 要监听的对象当中的属性, 对象(自带get(), set()方法))
    // 一个对象的对象
    Object.defineProperty(a, key, {
      // 读取属性调用的方法
      get() {
        console.log('正在读取a里面的值')
        return key
      },
      // 写入属性是调用的方法，给a写入值需要defineProperty同意，会自己调用方法写入
      set(newVal) {
        v = newVal
        fn()
      }
    })
  })
}

bindData()

// console.log(a.b)

a.b = 123
