//
const Event = require('events');
const ev = new Event();

// 订阅
ev.on('price', (a, b) => {    // 需要订阅什么信息，当信心更新时执行什么操作，此处订阅价格的变化
  console.log(a, b, '涨价了！！');
})

ev.on('price', (a, b) => {    // 可订阅多次
  console.log(a, b, '涨价了！！');
})

// 发布
ev.emit('price', '五花肉', '拌饭');