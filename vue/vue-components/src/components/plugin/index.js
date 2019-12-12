let Toast = {}

// 两个参数(Vue, xxx)
Toast.install = function (Vue, options) {
  let opt = {
    defaultType: 'center',    // 默认的显示位置
    duration: '1500',    // 1.5秒的持续时间
  }
  for (let property in options) {
    // 使用options的配置
    opt[property] = options[property]    // 用户把defaultType, duration属性传进来可对之前写的地方进行修改
  }
  // 函数中实现组件
  Vue.prototype.$toast = (tips, type) => {
    // 如果传了想展示的位置，则令其起作用
    if (type) {
      opt.defaultType = type
    }
    // 当前toast组件的template模板
    let toastTpl = Vue.extend({
      template: `<div class="vue-toast toast-${opt.defaultType}">${tips}</div>`
    })
    // 手动挂载一个未挂载的实例
    let tpl = new toastTpl().$mount().$el
    // 放在整个页面全局弹出
    document.body.appendChild(tpl)
    setTimeout(() => {
      document.body.removeChild(tpl)
    }, opt.duration);
  }
  // 当前支持移动的位置
  ['bottom', 'center', 'top'].forEach(type => {
    Vue.prototype.$toast[type] = (tips) => {
      return Vue.prototype.$toast(tips, type)
    }
  })
}

export {
  Toast
}