- 基本的结构套路
  #app>.page

- css的解析也是要花时间的  *{}费时

- 要对浏览器有认识
  -webkit Google浏览器内核 手机端多以它为主
  -ms PC端因为有Windows操作系统，其内容是微软的
  test-size-adjust: 100% 该属性比较新，浏览器可能不支持，但是在实验式的支持
  以加前缀的方式，-webkit- 让浏览器使用该属性

- 响应式编程，自适应的考点 rem, em是相对单位  px是像素单位，靠不住，不同的手机像素密度不一样
  weui  em
  100px 京东喜欢用这种
  16px  .16rem

- css考点
  -webkit-text-size-adjust: 100%
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;
  html font-size: 100px

- oo css
  .quick-login .quick-type
  stylus 嵌套
  只写一个类名很容易冲突
  模块化，命名空间

- base64
  更小 任何一张图片都是编码
  传输更快，完全在css中，不需要发送http请求(性能开销的核心)
  http请求数应该减少