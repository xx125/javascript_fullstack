- restful web
  一切皆资源
  DOM + CSS + JS
  缺少对URL的底层认识：Universal Resource Location
  http://www.taobao.com/shop/1/good/2
  明确的表达，它的资源是什么意思？

- npm init -y 把项目初始化，从前端项目加入后端，以node运行
  npm install json-server 安装json服务
  scripts 脚本区域可以执行一些命令
  json-server npm 包
  可以用web在url上将json文件向外暴露
  json 资源 restful
  构建语义化的url
  :1314/posts GET 代表db.json里所有的文章的数组，文章列表
  :1314/posts/1 url上有动态参数部分，根据文章id(1, 2, ...)查找详情
  GET    通过url明文访问
  POST   新增数据
  PUT    修改数据
  PATCH  修改数据
  DELETE 删除数据

  url + 谓语动词
  PUT：覆盖性修改，全部替换
  PATCH：部分修改

- :8080 live-server 启动了web页面
  :1314 启动了后端API
  不同的端口代表不同的服务
  前后端 全栈