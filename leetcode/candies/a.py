from typing import List

class Solution:
  def distributeCandies(self, candies: List(int)) -> int:
    # min 函数式内置函数
    # 原生Python3就支持set去重
    return min(len(set(candies)), len(candies) >> 1)

# 实例化
x = Solution()
print("最大的种类数", x.distributeCandies([1,1,2,2,3,3]))