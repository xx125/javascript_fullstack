// 可以被运行的对象叫函数
function LRUCache(capacity) {
    this.capacity = capacity; // 容量
    this.obj = {}; // get set 对象上的属性，负责存储数据
    // push splice数组的切割及删除 pop移除最后一个元素 unshift把要放的东西放到最前面
    this.arr = []; // 优先级
}

LRUCache.prototype.get = function(key) {
    /* 如果没有，返回-1 */
    /* 在get访问之后处理优先级 */
    var val = this.obj[key];
    if (val) {
        var index = this.arr.indexOf(key);
        this.arr.splice(index, 1);
        this.arr.unshift(key);
        return val;
    } else {
        return -1;
    }    
}
LRUCache.prototype.put = function(key, value) {
    if (this.obj[key]) {    //已存在
        this.obj[key] = value;  //更新
        /* 调整它的优先级，但是它在哪个位置？要先删除再移到最前面 */
        var index = this.arr.indexOf(key);
        this.arr.splice(index, 1);
        this.arr.unshift(key);
        return;
    }

    if (this.capacity === this.arr.length) {    //放满了
        var k = this.arr.pop();
        this.obj[k] = undefined;
    }
    this.obj[key] = value;
    this.arr.unshift(key);  // 把key放到最前面，在此处最前面是最优先
}

let cache = new LRUCache(2);
// console.log(cache.capacity);
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);
cache.put(3, 3);
console.log(cache.get(2));
cache.put(4, 4);
console.log(cache.get(1));
console.log(cache.get(3));
console.log(cache.get(4));
