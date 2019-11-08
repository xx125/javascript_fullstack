function cloneDeep(source) {
  if (typeof source !== 'object') {return source}

  var target = Array.isArray(source) ? [] : {}
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (typeof source[key] === 'object') {
        target[key] = cloneDeep(source[key])
      } else {
        target[key] = source[key]
      }
    }
  }
  return target
}

// let a = {
//   name: 'wn',
//   book: {
//     title: "You Don't Know Js",
//     price: '45'
//   }
// }
// a.name = '蜗牛',
// a.book.price = '55'

let a = [0, '1', [2, 3]]

let b = cloneDeep(a)
a[0] = 9
a[2][0] = 4

console.log(b)
