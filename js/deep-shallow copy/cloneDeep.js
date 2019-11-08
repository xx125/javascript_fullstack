// // function cloneShallow(source) {
// //   var target = {}
// //   for (var key in source) {
// //     if (Object.prototype.hasOwnProperty.call(source, key)) {
// //       target[key] = source[key]
// //     }
// //   }
// //   return target
// // }

// // let a = {
// //   name: 'wn',
// //   book: {
// //     title: "You Don't Know JavaScript",
// //     price: '45'
// //   }
// // }

// // let b = cloneShallow(a)
// // console.log(b)    /* { name: 'wn',
// //                        book: { title: 'You Don\'t Know JavaScript', price: '45' } } */

// // a.name = '蜗牛',
// // a.book.price = '55'
// // console.log(b)    /* { name: 'wn',
// //                        book: { title: 'You Don\'t Know JavaScript', price: '55' } } */



// function cloneDeep(source) {
//   if (typeof source !== 'object') {
//     return source
//   }
//     var target = Array.isArray(source) ? [] : {}
//     for (var key in source) {
//       if (Object.prototype.hasOwnProperty.call(source, key)) {
//         if (typeof source[key] === 'object') {
//           target[key] = cloneDeep(source[key])
//         } else {
//           target[key] = source[key]
//         }
//       }
//     }
//     return target
//   }
  
//   // let a = {
//   //   name: 'wn',
//   //   book: {
//   //     title: "You Don't Know JavaScript",
//   //     price: '45'
//   //   }
//   // }
  
//   // let b = cloneDeep(a)
//   // console.log(b)    /* { name: 'wn',
//   //                        book: { title: 'You Don\'t Know JavaScript', price: '45' } } */
  
//   // a.name = '蜗牛',
//   // a.book.price = '55'
//   // console.log(b)    /* { name: 'wn',
//   //                        book: { title: 'You Don\'t Know JavaScript', price: '45' } } */


//   // let a = [0, '1', [2, 3]]    /* 嵌套数组 */
//   // let b = a
//   // console.log(b)    /* [ 0, '1', [ 2, 3 ] ] */
//   // a[1] = '22'
//   // b = cloneDeep(a)
//   // console.log(b)    /* [ 0, '22', [ 2, 3 ] ] */
//   // console.log(a)    /* [ 0, '22', [ 2, 3 ] ] */
//   // a[2][0] = 4
//   // console.log(b)    /* [ 0, '22', [ 2, 3 ] ] */
//   // console.log(a)    /* [ 0, '22', [ 4, 3 ] ] */

//   let a = [0, '1', [2, 3]]    /* 嵌套数组 */
//   let b = a
//   console.log(b)    /* [ 0, '1', [ 2, 3 ] ] */
//   a[2][0] = 4
//   b = cloneDeep(a)
//   console.log(b)    /* [ 0, '1', [ 4, 3 ] ] */
//   console.log(a)    /* [ 0, '1', [ 4, 3 ] ] */
//   a[1] = '22'
//   console.log(b)    /* [ 0, '1', [ 4, 3 ] ] */
//   console.log(a)    /* [ 0, '22', [ 4, 3 ] ] */



//----------------------------------------------------------------------------------------

function cloneDeep2 (x) {
  const root = {}

  // 栈
  const loopList = [
    {
      parent: root,
      key: undefined,
      data: x
    }
  ]
  while (loopList.length) {
    const node = loopList.pop()
    const parent = node.parent
    const key = node.key
    const data = node.data

    let res = parent  // {}
    if (typeof key !== 'undefined') {
      res = parent[key] = {}
    }
    for (let k in data) {
      if (data.hasOwnProperty(k)) {
        if (typeof data[k] === 'object') {
          // 下一次循环
          loopList.push ({
            parent: res,
            key: k,
            data: data[k]
          })
        } else {
          res[k] = data[k]
        }
      }
    }
  }
}

let b = cloneDeep2(a)
a.name = 'www'
a.book.price = '55'
console.log(b)