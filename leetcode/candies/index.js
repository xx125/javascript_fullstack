// es6新特性
const distributeCandies = function (candies) {
  // 糖果的种类数
  var count = 0    // 种类数 unique
  let obj = {}
  // for (let i = 0; i <= candies.length; i++) {
  //   if (!obj[item]) {
  //     obj[item] = 1
  //     count ++
  // }
  candies.forEach(function(item) {
    // 如果出现过
    if (!obj[item]) {
      obj[item] = 1    // 做个标记表示出现过了
      count ++     // 种类数 + 1
    }
  })
  // 如果数组长度为奇数，使用>>1右移一位，可省略小数
  return count >= (candies.length / 2) ? (candies.length >> 1) : count
}

console.log(distributeCandies([1,1,2,2,3,3]))