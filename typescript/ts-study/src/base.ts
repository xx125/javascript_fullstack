// 基本数据类型：
// boolean, number, string, void, undefined, null

const isLoading: boolean = false
const decLiteral: number = 6
const hexLiteral: number = 0xf00d   // 进制的类型也是number

const book: string = '深入浅出 TypeScript'

// void 空类型
function User(): void {
  console.log('wn')
}

const a: void = undefined    // undefined是any类型，可以被修改别的类型
const b = null         // null也可以被改成void

let u: undefined = undefined
let n: null = null

const sym1 = Symbol('key1')
const sym2 = Symbol('key2')
Symbol('key1') === Symbol('key2')    // false

// const max = Number.MAX_SAFE_INTEGER
// const max1 = max + 1
// const max2 = max + 2
// max1 === max2    //true

// 大数整型
// const max = BigInt(Number.MAX_SAFE_INTEGER)

// const max1 = max + 1n
// const max2 = max + 2n
// max1 === max2    // false
