// 常用非基本数据类型：
// any, unknown, never, number[], Array, Tuple, object, enum

let notSure: any = 4    // 不确定是4还是"4"
notSure = 'wn'


// ------------------------------------------------------------------------------------------------
let value: any
value = true
value = 1
value = 'hello'
value = Symbol('type')
value = {wn: '1'}
value = [1, 2, 5]
value = undefined
value = null

value.foo.bar
value()
new value()
value[0][1]

// -------------------------------------- any与unknown的区别 --------------------------------------

let val: unknown
val = true
val = 1
val = 'hello'
val = Symbol('type')
val = {wn: '1'}
val = [1, 2, 5]
val = undefined
val = null

// unknown被操作之前会执行某一种检查，可以被赋值，不能被操作
// 全部报错
// val.foo.bar
// val()
// new val()
// val[0][1]


// --------------------------------------------- never ---------------------------------------------------
// never类似是任何类似的子类型，也可以赋值给任何类型: 可以用never的时候也可以用别的类型，可以用别的类型的时候不一定能用never
// 然而没有类型是never的子类型或赋值给never类型
// let test: never = 'hello'    // 报错
function error(message: string): void {    // function可以不指名类型
  throw new Error(message)
}
const empty: never[] = []    // 保持数组一直为空
// empty.push(1)    // 保存


// --------------------------------------------- Array ---------------------------------------------------
const list: number[] = [1, 2, 3, 4]
const list2: Array<number> = [1, 2, 3, 4]    // 泛型


// ----------------------------------- Tuple 元组(多种元素的组合) -----------------------------------------
let x: [string, number, boolean]
x = ['hello', 10, false]
// x = ['hello']    // 报错
// x = [10, 'hello', true]    // 报错

// 元组相当于
// interface Tuple extands Array<string | number> {
//   0: string,
//   1: number,
//   length: 2
// }


// --------------------------------------------- object -------------------------------------------------
enum Direction {
  centre = 1
}
let Value: object

Value = Direction
Value = [1]
Value = [1, 'hello']
Value = {}