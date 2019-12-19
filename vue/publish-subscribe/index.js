let sellsOffice = {}    // 售楼部
sellsOffice.books = []    // 缓存列表，即花名册，存放订阅者(的回调函数)

// 增加订阅者
sellsOffice.listen = function (fn) {
  this.books.push(fn)    // 订阅的消息添加到缓存列表
}

// 发布消息
sellsOffice.trigger = function () {
  // = for (let i = 0, fn; (fn = sellsOffice.books[i++]);)
  for (i = 0; i < sellsOffice.books.length; i++) {
    let fn = sellsOffice.books[i]
    // 绑定this作用域
    fn.apply(this, arguments)
  }
}

sellsOffice.listen(function (price, squareMeter) {
  // 购买者a
  console.log(`价格是：${price}`)
  console.log(`面积是：${squareMeter}`)
  // 购买者b
  console.log(`价格是：${price}`)
  console.log(`面积是：${squareMeter}`)
})

sellsOffice.trigger(2000000, 100)