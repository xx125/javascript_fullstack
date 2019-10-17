- es5
  js中，函数是一等公民
  js的过去没有class，关键字
  function LRUCache：类的构造函数
  定义了一个类，
  new LRUCache 可以被实例化
  new 过程发生了什么？(必考)
  生成了一个对象 {} js里对象最顶头是Object
  内存中生成一个空的对象 {} new
  加上属性 构造函数 this ?(小黄书的第三章)


  面向对象      类，         构造函数，      方法，     属性
              class,       constructor
            function A       函数本身     prototype this.
  函数具有prototype属性
  火车头 constructor   prototype对象
  基于原型的面向对象

- 任何函数都有prototype属性，它的值是对象
  通过 key => function () {}
- 任何对象都有__proto__属性，指向构造函数的prototype属性
JS的面向对象，类和实例的关系，不是父子关系，没有血缘
JS的面向对象是基于原型的

- new的过程 构造函数 被执行，new之后创造一个this，帮助指向对象
  this.(..) 为对象加属性  
  对象的__proto__属性，可以找到原型链上的方法，就可以执行了
  cache instanceof LRUCache
  JS中没有类的概念，LRUCache 也是对象

- es6 7 8

-               2
  1             1
  [1  2]        0
  get(1)
  [2  1]        1

数组
- 能装 有容量
- push 最后一个元素是最重要的
- 下标0的元素可以被删除
- 要移除的临界点：空间还有吗？
  有   push
  没有 移除一个再push
- get：在哪儿？ 拿了之后放到最后一个，即在原位置删除，并且放到最后