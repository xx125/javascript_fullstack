// {12, 23, 123, 53, 67, 34, 24, 89}
var a = [12, 23, 123, 53, 67, 34, 24, 89]

var quickSort = function (arr) {
  if (arr.length <= 1) {return arr}

  var pivotIndex = Math.floor(arr.length / 2)
  var pivot = arr.splice(pivotIndex, 1)[0]    // 基准数53
  var left = []
  var right = []

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  // 把子集拼接起来，concat连接两个或多个数组；左边数组 + 基准数 + 右边数组
  return quickSort(left).concat([pivot], quickSort(right))
}

console.log(quickSort(a))