// 缓存算法
// 函数 es5 首字母大写的函数，就是一个类，解决缓存问题
function LRUCache (title) {
    // 构造函数
    // 类的属性
    // this 是指针 只有指向要生成的对象
    console.log(this);
    this.title = title;
}
// 加方法
LRUCache.prototype.sayHello = function () {
    console.log(`你好，${this.title}`);     /* this指向对象cache */
}
LRUCache.buyCar = function() {    // LRUCache.buyCar 是静态方法
    console.log('买车');
}

// 对象 实例
let cache = new LRUCache('井柏然');       // 一个类被new是实例化的过程
console.log(cache.title);
console.log(cache.sayHello());
// console.log(cache.buyCar());
LRUCache.buyCar();
console.log(cache.__proto__ == LRUCache.prototype);
console.log(cache instanceof LRUCache);     // instanceof 获得某个对象是否是该类的实例