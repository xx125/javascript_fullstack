# 预编译四部曲(发生在函数执行之前)
  1. 创建AO对象
  2. 找形参和变量声明，将变量声明和形参作为AO属性名，值为undefined
  3. 将实参值和形参值统一
  4. 在函数体里找到函数声明，将函数名作为AO对象的属性名，值赋予函数体

AO {
  a: undefined => 1 => function () {},    // fn(a), var a => f(1) => function a() {}
  b: undefined,    // var b
  d: function () {}
}


# 预编译也发生在全局
  1. 创建GO对象
  2. 找形参和变量声明，将变量声明和形参作为AO属性名，值为undefined
  3. 在函数体里找到函数声明，将函数名作为GO对象的属性名，值赋予函数体

GO {
  
} GO === window