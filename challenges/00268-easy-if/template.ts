type If<C extends boolean, T, F> = C extends true ? T : F

// 类型兼容性 ｜ 分配规则
// null严格模式和非严格模式的区别

// js
// function If(C, T, F) {
//     return C ? T : F
// }