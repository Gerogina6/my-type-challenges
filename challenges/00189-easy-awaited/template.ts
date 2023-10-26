type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X> 
? X extends Promise<unknown> 
? MyAwaited<X> 
: X
: number

// infer
// 相当于x未知数
// 只能在条件类型里面使用