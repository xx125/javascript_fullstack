class Dep {    // 订阅者
  constructor() {
    // 用来存放watcher对象的数组
    this.subs = []
  }

  // 在subs中添加watcher
  addSub(sub) {
    this.subs.push(sub)
  }

  // 通知所有的watcher对象更新视图
  notify () {
    this.subs.forEach((sub) => {
      sub.update()
    })
  }
}


class Watcher {    //观察者
  constructor () {
    // 在new一个watcher对象时，将该对象赋值给Dep.target，在get中会用到，代表了watcher的作用域
    Dep.target = this
  }

  // 更新视图的方法
  update () {
    console.log('视图更新啦')
  }
}
// 设置为null会被垃圾机制回收掉，防止造成内存泄漏
Dep.target = null

function defineReactive (obj, key, value) {
  // Dep类对象
  const dep = new Dep()

  // 用来给监听的对象新增或修改属性
  Object.defineProperty (obj, key, {
    // 是否可枚举
    enumerable: true,
    // 是否可配置
    configurable: true,
    // 读取属性的时候调用的方法
    get: function () {
      // 将Dep.target(也就是当前的watcher对象存入dep的subs中)
      dep.addSub(Dep.target)
      return val
    },
    set: function reactiveSetter(newVal) {
      if (newVal === val) return
      // 如果发生变化，触发dep中的notify方法，通知所有的watcher
      dep.notify()
    }
  })
}

function observer (value) {
  if (!value || (typeof value !== 'Object')) {
    return
  }
  // 拿到test
  Object.keys(value).forEach((key) => {
    defineReactive(value, key, value[key])
  }) 
}

class Vue {
  constructor (options) {
    this._data = options.data
    observer(this._data)
    // 新建一个观察者对象
    new Watcher()
    // 模拟render的过程，为了触发test属性的get函数
    console.log('render~~~', this._data.test)
  }
}


// 测试
let o = new Vue({
  data: {
    test: 'I am a test'
  }
})
o._data.test = 'hello'