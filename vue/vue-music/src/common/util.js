// 去抖动，防手抖
export function debounce (func, delay) {
  let timer
  // 有没有参数都可以写arguments
  return function (...args) {
    // 如果timer还在，即setTimeout还没执行完，setTimeout的时间还没过，还处在delay的时间段
    if (timer) {
      // timer被清除，重新赋值，直到timer不被清除，例经过三秒没有输入，即执行func方法
      // 由此达到防手抖的效果，可以避免用户不断向服务器发送请求
      clearTimeout(timer)
    }
    timer = setTimeout (() => {
      // this因为某些原因失效，可以加上.call / .apply
      func.apply(this, args)
    }, delay)
  }
}