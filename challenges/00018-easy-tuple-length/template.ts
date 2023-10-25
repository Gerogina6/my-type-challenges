type Length<T extends readonly any[]> = T['length']

// 什么是tuple类型
// tuple和普通的数组有什么区别

// js
// function getLength(arr) {
//     if (!Array.isArray(arr)) return
//     return arr.length
// }