const Koa = require('koa')
const path = require('path')
// 解析表单中间件
const bodyParser = require('koa-bodyparser')
// 模板文件
const ejs = require('ejs')
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
const Router = require('koa-router')
const views = require('koa-views')
// const koaStatic = require('koa-static')
// 静态资源
const staticCache = require('koa-static-cache')
const config = require('./config/default.js');


const app = new Koa()
const router = new Router()

// *不管请求什么路径都显示hello world
router.get('*', (ctx, next) => {
  ctx.body = 'hello world'
  next()
})

// 缓存
app.use(staticCache(path.join(__dirname, './public'), { dynamic: true }, { maxAge: 365 * 24 * 60 * 60 }))

app.use(staticCache(path.join(__dirname, './images'), { dynamic: true }, { maxAge: 365 * 24 * 60 * 60 }))

// 配置服务器端模板渲染引擎中间件
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))

app.listen(3000)
console.log(`listen on port ${config.port}`)