let http = require('http')
let EventEmitter = require('events')
let context = require('./context')
let request = require('./request')
let response = require('./response')
let Stream = require('stream')

class Koa extends EventEmitter {
  constructor () {
    super()    // 继承Koa里的方法
    this.fn
    this.context = context
    this.request = request
    this.response = response
  }
  use (fn) {
    this.fn = fn
  }

  createContext (req, res) {    // 创建ctx
    const ctx = Object.create(this.context)
    const request = ctx.request = Object.create(this.request)
    const response = ctx.response = Object.create(this.response)
    // 交叉赋值
    ctx.req = request.req = response.req = req
    ctx.res = request.res = response.res = res
    request.ctx = res.ctx
    request.response = response
    request.request = request
    return ctx
  }

  handleRequest (req, res) {    //创建一个处理请求的函数
    res.statusCode = 404
    let ctx = this.createContext(req, res)    // 创建了ctx
    this.fn(ctx)
    if (typeof ctx.body == 'object') {
      res.setHeader('Content-Type', 'application/json;carset=utf8')
      res.end(JSON.stringify(ctx.body))
    } else if (ctx.body instanceof Stream) {
      ctx.body.pipe(res)    // 处理流(文件)类型
    } else if (typeof ctx.body == 'string' || Buffer.isBuffer(ctx.body)) {
      res.setHeader('Content-Type', 'text/html;charset=utf8')
      res.end(ctx.body)
    } else {
      res.end('Not fount')
    }
  }

  listen (...args) {
    let server = http.createServer(this.handleRequest.bind(this))
    server.listen(...args) 
  }
}

module.exports = Koa