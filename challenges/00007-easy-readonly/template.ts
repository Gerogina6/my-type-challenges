type MyReadonly<T> = {
    readonly [P in keyof T]:T[P] 
}

interface Todo {
    a: string;
    b: string;
}

// js
// function readonly(obj) {
//     const result = {}
//     for(const key in obj) {
//         result[['readonlu' + key]] = obj[key]
//     }
//     return result
// }

// 1.返回一个对象
// 2.遍历对象（js对象 ts接口） in -> mapped keyof -> lookup 
// 3.加上readonly关键字
// 4.通过key来获取对象（接口）里的值 indexed