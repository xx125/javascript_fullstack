# 快速排序
  {12, 23, 123, 53, 67, 34, 24, 89}
  1. 选择一个元素作为基准 53
  2. 所有小于该基准的元素，都移到当前基准元素的左边；所有大于该基准的元素，都移到当前基准元素的右边
  3. 对基准左右两边的子集，重复1, 2步骤

  - {12, 23, 34, 24, 53, 123, 67, 89}  左基准23, 右基准67
  - {12, 23, 34, 24, 53, 67, 123, 89}
  - ...
  - {12, 23, 24, 34, 53, 67, 89, 123}


# splice和slice的区别
  splice(从第几个开始删, 删几个) => 改变原数组
  slice(从第几个开始删, 到第几个结束) => 不改变原数组

