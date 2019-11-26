import Vue from 'vue'
import Notification from './Notification'

// new Swiper()
// new Gcode()
// 面向对象可以达到代码复用的效果

// extend接收props里的大对象
const NotificationConstructor = Vue.extend(Notification)

// toast
let notification
export const open = ({ title, content }) => {
  if (notification) {
    notification.title = title
    notification.content = content
  } else {
    notification = new NotificationConstructor({
      el: document.createElement('div'),
      propsData: {
        visible: true,
        title,
        content
      }
    })
    document.body.appendChild(notification.$el)
  }
}

export const close = function () {
  // 难 听不懂
  notification.visible = false
  document.body.removeChild(notification.$el)
}