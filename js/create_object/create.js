function create(obj) {
  //写一个create方法，实现create的功能，返回一个实例对象
  //对象，它的一个原型是obj
  function F() {}
  F.prototype = obj;  //对象的proto属性指向构造函数的对象
  return new F();     //返回一个空对象，可以new一下
}

var Person = {
  name: "noname",
  age: 0,
  greet: function() {
    console.log(`Hello, ${this.name}`);
  }
}
var tom = create(Person); 
tom.name = 'tom';
tom.greet();