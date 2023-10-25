type First<T extends any[]> =T extends [] ? never : T[0]

// 1.extends类型条件判断
// 2.获取tuple的length属性
// 3.extends union判断的规则
// 4.inter的使用

// js
// const first = (arr) => {
//     // 空数组要返回never
//     return arr[0]
// }