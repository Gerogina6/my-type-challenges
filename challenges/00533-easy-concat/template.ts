type Concat<T extends readonly unknown[], U extends readonly unknown[]> = [...T, ...U]

// js
// function Concat(arrA, arrB) {
//     return [...arrA, ...arrB]
// }