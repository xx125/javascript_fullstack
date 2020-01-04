// // node的web服务
// let http = require('http')

// let server = http.createServer((req, res) => {
//   res.end('hello world')
// })

// server.listen(3000, () => {
//   console.log('服务跑起来了...')
// })


// 用koa跑web服务，不需要引入http可以启动node服务证明koa内部解决了；createServer被use解决了；(req, res)被ctx解决了
// const Koa = require('koa')
// const app = new Koa()

// app.use((ctx, next) => {
//   ctx.body = 'Hello world!'
// })

// app.listen(3000)


let myKoa = require('./lib/application')
let app = new myKoa()

app.use((ctx) => {
  // console.log(ctx.req.url)          // /abc
  // console.log(ctx.request.req.url)  // /abc
  // console.log(ctx.response.req.url) // /abc
  // console.log(ctx.request.url)      // /abc?id=1
  // console.log(ctx.response.url)
  // console.log(ctx.url)              // /abc?id=2
  // console.log(ctx.path)
  ctx.body = {
    name: 'haroro',
    age: 14
  }
  console.log(ctx.body)
})

app.listen(3000)