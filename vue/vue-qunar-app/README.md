# js的懒加载
  component: () => import('@/page/home/Home')


## 代理
  请求不跨域的服务器，代理的服务器把请求转到真实的服务器
  webpack-dev-server localhost:8080
  同源：同协议、同域名、同端口

# 配置代理
  1. .vue文件
    mounted () {
      axios.get('/api/city.json')
        .then(res => {
          console.log(res)
        })
    }
  2. config -> index.js
    proxyTable: {
      "/api": {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/static/mock/'
        }
      }
    }

# 反向代理
  反向代理，代理的是客户端


## BsScroll
  安装：cnpm i better-scroll -S
  引入：import BsScroll from 'better-scroll'
  使用： mounted () {
          this.scroll = new BsScroll(document.querySelector('.list'))
        }
  # list为最外层容器，最外层里不能有两个同级的子容器，只能有一个