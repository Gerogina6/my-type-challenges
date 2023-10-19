type TupleToObject<T extends readonly any[]> = {
    [P in T[number]]: P
}

// js
// function TupleToObject(array) {
//     const obj = {}
//     array.forEach((val) => {
//         obj[val] = val
//     })
//     return obj
// }

// 返回一个对象
// 遍历array T[number]