触屏 重力感应 陀螺仪 手机区别于PC 
touchstart touchmove  touchend ? 
- 让我们的阴影 感知力度？ css border-radius 50%  
- 那么多张树懒的照片？ 
- 力度作用到照片? 
- 雪碧图 
  往右走， 往下走都是负值
  background-size: 400%;


- 硬件调试
  手机电脑相连，确认在同一wifi下
  gitbash windows输入ipconfig  Mac输入ifconfig  找到ip地址
  网址输入http://192.168.31.150:1314/ 电脑可查看   1314为设定的端口号
  将网址输入草料二维码，得到二维码，手机扫码后可查看


- live-server 
  启动http服务 
  http协议是web的底层

- node 内建http模块
  http.createServer((req, res) => {
      console.log(req, url)
  }).listen(1314)
  一直伺服
  www.baidu.com     www.baidu.com:80 ngnix

- http  fs  path  都是node的内置模块
  index.html
  sloth.png
  一切皆是资源   url 表示
  /                         index.html
  /images/sloth.png         sloth.png        
  区别 req.url  请求对象的路径
  文件类型不一样  text/html  image/png
  res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"})
