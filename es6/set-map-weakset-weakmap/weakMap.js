const wm = new WeakMap()
const key = { foo: 1 }
wm.set(key, 2)
console.log(wm)    // 一个对象 { foo: 1 }: 2
console.log(wm.get(key))    // 2

const k1 = [1, 2, 3]
const k2 = [4, 5, 6]
const wm2 = new WeakMap([[k1, 'foo'], [k2, 'bar']])
console.log(wm2.get(k2))    // bar

const map = new WeakMap()
map.set(1, 2)    // 因为1不是Object类型
console.log(map.get(1))    // 报错

map.set(null, 2)
console.log(map.get(null))


const e1 = document.getElementById('foo')
const e2 = document.getElementById('bar')
const arr = [
  [e1, 'foo元素'],
  [e2, 'bar元素']
]

// 当不需要e1和e2的时候，必须手动删除
arr[0] = null
arr[1] = null

// 如何简化？
const wm = new WeakMap()
const element = document.getElementById('test')
wm.set(element, 'some infomations')
wm.get(element)


const wm = new WeakMap()
let key = {}
let obj = { foo: 1 }

wm.set(key, obj)
obj = null
console.log(wm.get(key))


const wm = new WeakMap()
console.log(wm.size)    // undefined



let myElement = document.getElementById('logo')
let myWeakMap = new WeakMap()

myWeakMap.set(myElement, {timesClicked: 0})
myElement.addEventListener('click', function () {
  let logoData = myWeakMap.get(myElement)
  logoData.timesClicked ++
})