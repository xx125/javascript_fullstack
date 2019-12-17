// const data = {}
// const element = document.getElementById('myDiv')

// data[element] = 'yhl'
// data['[object HTMLDivElement]']

const m = new Map()
const o = {p: 'hello world'}

// map自带的方法set，用于设置或修改实例当中的值
m.set(o, 'content')
console.log(m.get(o))    // content

m.has(o)
console.log(m.has(o))    // true

m.delete(o)
console.log(m.has(o))    // false


// Map支持接收数组格式
const items = new Map([
  ['name', '蜗牛'],
  ['sex', 'boy']
])

// 数组会被转换成对象，过程：
// const items = [
//   ['name', '蜗牛'],
//   ['sex', 'boy']
// ]
// const map = new Map()
// items.forEach(([key, value]) => map.set(key, value))
// 
// 即转换成 =>
// 
// items = {
//   'name': '蜗牛',
//   'sex': 'boy'
// }

console.log(items.get('name'))    // 蜗牛
console.log(items.has('name'))    // true

// 实际上不仅仅是数组，任何具有Iterator(迭代器)接口，只要每一个成员都是双元素数组的数据结构，都可以作为Map的参数
// 所以Set、Map都可以用来生成新的Map

const set = new Set([
  ['foo', 1],
  ['bar', 2]
])

const m1 = new Map(set)
console.log(m1.get('foo'))    // 1

// const m2 = new Map(['baz', 3])    // 不可以，不是双元素数组
const m2 = new Map([['baz', 3]])
console.log(m2)    // Map { 'baz' => 3 }

const m3 = new Map(m2)    // m2此时是对象

console.log(m3.get('baz'))    // 3



const map = new Map()
map.set(1, 'aaa').set(1, 'bbb')
console.log(map)    // Map { 1 => 'bbb' }
// key值不能重复
console.log(map.get(2))    // undefined



const k1 = ['a']
const k2 = ['a']

// 相同的value在不同对象中引用，则Map结构中视为两个key
map.set(k1, 111).set(k2, 222)
console.log(map)    // Map { [ 'a' ] => 111, [ 'a' ] => 222 }



let map = new Map()
map.set(-0, 123)
console.log(map.get(+0))    // 123，说明对于Map来说，+0和-0是一样的


map.set(true, 1)
map.set('true', 2)
console.log(map.get(true))    // 1，说明布尔值和字符串值不一样


map.set(undefined, 33)
map.set(null, 44)
console.log(map.get(undefined))    // 33，说明undefined和null不一样


map.set(NaN, 55)
console.log(map.get(NaN))    // 55，说明Map可以取到NaN



// key值是Number，Object取不到数据，把data整理成Map的数据结构
data = {
  0: {name: 'wn', age: 18},
  1: {name: 'wn2', age: 19},
  2: {name: 'wn3', age: 20},
}