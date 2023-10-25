type TupleToObject<T extends readonly (string | number | symbol)[]> = {
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

// https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
// https://wangdoc.com/typescript/operator
// https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html#ts-check