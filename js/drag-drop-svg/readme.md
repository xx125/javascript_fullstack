## 浏览器Network
  浏览器收到html会解析为DOM(文档对象模型)
  遇到css会解析为cssom
  把dom和cssom合在一起，生成一颗渲染树
  根据样式计算位置，开始渲染布局

  domContentloaded就是在html解析完之后发生的

  有一些标签如：image, link, script会引入外部资源，在解析完html之后，开始请求外部资源