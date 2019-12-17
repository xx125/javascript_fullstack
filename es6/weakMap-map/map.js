// --------------------------------------------- 强引用 --------------------------------------------------------
// global.gc()
// console.log(process.memoryUsage())

// // 引用计数
// let array = new Array(4 * 1024)    // []  +1
// let map = new Map()
// // {}
// map.set(array, 4)    // +1
// array = null    // -1  计数为0回收，只要不为0就不回收；+1 +1 -1不为0则不回收
// global.gc()
// console.log(process.memoryUsage())


// --------------------------------------------- 弱引用 --------------------------------------------------------
global.gc()
console.log(process.memoryUsage())

// 引用计数
let array = new Array(4 * 1024)
// WeakMap即便引用这个Array，但是垃圾回收不把WeakMap考虑在内，依然会回收Array
let map = new WeakMap()
map.set(array, 4)
array = null
global.gc() 
console.log(process.memoryUsage())
