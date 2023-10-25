type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never

// 1.extends类型条件判断：T extends [] ? never : T[0]
// 2.获取tuple的length属性：T['length'] extends 0 ? never : T[0]
// 3.extends union判断的规则：T[0] extends T[number] ? T[0] : never
// 4.infer(推断）：T extends [infer First, ...infer Rest] ? First : never

// js
// const first = (arr) => {
//     // 空数组要返回never
//     if (arr.length === 0) return 'never'
//     return arr[0]
// }

// T[number]
// type ages = [1,2,3]
// // union
// type t1 = ages[number]
// // 看看某个值是不是在union里面
// // 1 extends 1 / 1 extends 2 / 1 extends 3
// type t2 = T[0] extends ages[number] ? 'true' : 'false'

// 解构
// const first = (arr) => {
//     // 空数组要返回never
//     const [first, ...rest] = arr
//     return first ? first : 'never'
// }