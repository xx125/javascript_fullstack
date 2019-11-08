// let a = 'wn'
// let b = a
// a = '蜗牛'
// console.log(b)   /* wn */
// -------------------------------------------------------------------------------------------

// let a = {
//   name: 'wn',
//   book: {
//     title: "You Don't Know JavaScript",
//     price: '45'
//   }
// }
// -------------------------------------------------------------------------------------------

// let b = a

// a.name = '蜗牛'
// a.book.price = '55'
// console.log(b)    /* 蜗牛, 55 */    引用类型执行的复制操作叫浅拷贝
// -------------------------------------------------------------------------------------------

// let a = {'name': '蜗牛'}
// let b = {'age': 18}
// 对象的拼接
// let c = Object.assign(a, b)
// console.log(c)    /* { name: '蜗牛', age: 18 } */
// -------------------------------------------------------------------------------------------

// let a = {
//   name: 'wn',
//   book: {
//     title: "You Don't Know JavaScript",
//     price: '45'
//   }
// }

// // let b = Object.assign({}, a)
// let b = {...a}    /* 解构既不是深拷贝也不是浅拷贝 */

// a.name = '蜗牛'
// a.book.price = '55'
// console.log(b)    /* wn, 55 */    /* Object.assign既不是深拷贝也不是浅拷贝 */
// -------------------------------------------------------------------------------------------

// let a = [0, '1', [2, 3]]    /* 嵌套数组 */
// // let b = []
// // b = ['1', [2, 3]]    /* = slice */
// let b = a.slice(1)
// a[1] = '22'
// a[2][0] = 4
// console.log(b)    /* [ '1', [ 4, 3 ] ] */
// console.log(a)    /* [ 0, '22', [ 4, 3 ] ] ? */
// -------------------------------------------------------------------------------------------

let a = {
  name: 'wn',
  book: {
    title: "You Don't Know JavaScript",
    price: '45'
  }
}
let b = JSON.parse(JSON.stringify(a))   /* 将a先转化成字符串，再转化成对象 */
console.log(b)    /* { name: 'wn',
                       book: { title: 'You Don\'t Know JavaScript', price: '45' } } */

a.name = '蜗牛'
a.book.price = '55'

console.log(b)    /* { name: 'wn',
                       book: { title: 'You Don\'t Know JavaScript', price: '45' } } */