- new 的过程
  1. 创建空对象 {}
  2. new FunctionA () {}
     函数运行时，会产生必定的几个对象
     动态决定
     this {} <= this.name
     当FunctionA不是以new的方式来运行时，它就是一个普通函数，此时this指向window
     'use strict'；建议启动
     启动严格模式时，this undefined

     arguments
     任何一个原型对象都有一个构造函数，两口子关系constructor(提供属性)可以作为普通函数用，prototype(提供方法)
     Person.prototype.constructor == Person
     true

     任何对象都有一个属性proto
     woniu.__proto__ === Person.prototype

     JS中没有类，Person是一个可执行的函数对象

     this的用法
     this当作为对象的方法被执行时，this指向对象：woniu.sing();
     new Person里，this指向实例
     Person() 普通函数被运行时 this指向undefined | window

     woniu.name
     "蜗牛" 

     woniu.planet
     "earth"      

     woniu.__proto__
     Animal {planet: "earth"}

     woniu.__proto__ == Person.prototype
     true

     Person.prototype.__proto__ === Animal.prototype
     true

     woniu.planet
     "earth"      为什么能拿到earth？
     woniu是Person的一个实例
     Person {name: "蜗牛"}
     基于原型链式的查找：
     Person {name: "蜗牛"}
      name: "蜗牛"
      __proto__: Animal
        planet: "earth"
        __proto__: 
          getPlanet: ƒ ()
          constructor: ƒ Animal(planet)
          __proto__: Object(源头，没有定义prototype的就是object)

      
     
     //下次课
     woniu.toString()   返回woniu的类型
     "[object object]" 

     Person.toString()
     "function Person (name) {
           this.name = name;
         }"


- 面向对象的做法有三种
  1. constructor + prototype 基于原型
  2. es6有class关键字
  3. Object.create(原型对象)

- 手写代码是js考试的方式
  Object.create()
  function create(obj) {
    function F() {}     // 声明一个空函数，首字母大写表示可以被实例化
    F.prototype = obj;  // 返回一个实例
    return new F();     // 返回一个新对象
  }