type MyExclude<T, U> = T extends U ? never : T

// type t2 = 'a' | 'b' | 'c'
// type t3 = 'a'
// type t1 = MyExclude<t2,t3>


// js
// ['a', 'b', 'c']
// ['a']
// function MyExclude(T,U) {
//     // T.filter(v => !U.includes(v))
//     const result = []
//     for(let i = 0; i < T.lenght; i++) {
//         const t = T[i]
//         // let boo = false
//         // for(let j = 0; j < U.length; j++) {
//         //     const u = U[j]
//         //     if (t === u) {
//         //         boo = true
//         //     }
//         // }
//         // if(!boo) {
//         //     result.push(t)
//         // }
//         if(!U.includes(t)) {
//             result.push(t)
//         }
//     }
//     return result
// }