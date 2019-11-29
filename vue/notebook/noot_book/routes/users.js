const router = require('koa-router')()
// 引入所有和用户有关的服务
const userServices = require('../controllers/mySqlConfig')

// 路由前缀
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/all', async(ctx, next) => {
  await userServices.getAllusers().then((res) => {
    console.log('打印结果：' + JSON.stringify(res))
    ctx.body = res
  })
})

module.exports = router
