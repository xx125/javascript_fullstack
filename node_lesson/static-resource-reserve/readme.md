## 静态资源
  不会随着服务运行而改变的东西
  html, css, js, jpg, png

  请求的url和文件在磁盘上的路径一一对应起来
  :8888/logo.png -> 404
  :8888/js/home.js -> read -> res

  静态资源服务器：nginx

  浏览器双击打开是file协议：file:///D:/javascript_fullstack/node_lesson/static-resource-reserve/index.html
  放到服务器上面是http协议