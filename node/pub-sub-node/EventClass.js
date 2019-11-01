let listener = [
  () => {console.log(1)},
  () => {console.log(2)},
  1,
  2,
  3
];

// ----------------------------------重要-------------------------------------
const subPub = {
  'price': [],
  'paper': []
}
// price对应的方法执行一遍
for (let i = 0; i < subPub.price.length; i++) {
  console.log('---', subPub.price[i]);
  subPub.price[i]();
}
function  foo() {
  console.log('foo')
}

// foo: [foo]
// 在pubSub上面添加一个value为数组的key(foo)
// 把foo方法放到数组里面去
subPub.foo = [foo];   // 赋值
console.log(subPub);

// -----------------------------------------------------------------------
class Event {
  constructor() {
    this.listener = {};   // 按类别把订阅者的东西收集好
  }
  on(key, fn) {
    if (!this.listener[key]) {
      this.listener[key] = [];      // 如果没有，加上
    } 
    this.listener[key].push(fn);  // 如果有，直接push
    // this.listener.push(fn);
  }
  emit(key) {
    for (let i = 0; i < this.listener[key].length; i++) {
      console.log('---', this.listener[key][i]);
      this.listener[key][i]();
    }
  }
}
// -----------------------------------------------------------------------

const ev = new Event()
ev.on('abc', () => {console.log(1)})
ev.on('abc', () => {console.log(2)})
ev.emit('abc')   // 真正执行