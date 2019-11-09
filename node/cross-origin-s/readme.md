## 跨域
    是一个浏览器的安全策略
    两个服务需要通信，需要遵守同源策略遵守：同协议、同域名、同端口号
    同源才会让你发出请求
    不同源就产生跨域

    http://localhost:8080/index.html

    可以请求的api: http://localhost.com/api/v1


    baidu.com 和 api.baidu.com不是同源的，域名不同

  # cors跨域资源共享
    cross-origin-resource-share
    正统的解决跨域问题的方式
    是一个规范，允许服务器申明哪些源可以访问

  # 'Access-Control-Allow-Credentials': true     
    是否允许cookie传输 

  # 请求的步骤
    1. 简单请求(可以构造表单的请求)：直接发起跨域请求
    2. 复杂请求：先发起预检(preFlight)请求，预先试探一下服务端支不支持跨域

  # jsonP
    link script img: 不受同源策略的影响