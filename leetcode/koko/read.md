- 香蕉建模
piles = [3, 6, 7, 11]
K      H   8
最小速度 4√  5

[30, 11, 23, 4, 20]  H = 6

Math.max(number1, number2, ...) 只能比较数字大小
ES6的展开运算符：...[1, 2, 3, 4]  在数组前打三个点展开数组

Math.ceil() 向上取整
Math.floor() 向下取整

位移运算 
3 >> 1  
1 
3向右移一位得1   0011 >> 0001
4 >> 1  
2 
3向右移一位得2   0100 >> 0010

- piles H mid
  能吃完香蕉 canEatAllBananas
  for pile of
  Math.ceil( pile / mid) 向上取整
- [3, 6, 7, 11]
  Math.max(...piles)
  lo        mid        hi
  1          6         11
  1          3          5
  4          4          5
  4          4          3       lo > hi 退出循环
     