// 高阶函数 ： 函数可以当成参数传给另一个函数  一个函数返回另一个函数

// 闭包： 函数可以不在当前作用域下执行

// 属性私有化
function isType(type) { // type只会存在当前上下文中
    return function (context) {
        return Object.prototype.toString.call(context) === `[object ${type}]`;
    }
}
// 柯里化
let isString = isType('String');
let isBoolean = isType('Boolean');

console.log(isString('hello'));
console.log(isBoolean(true));


// 函数柯里化实现 
function add(a, b, c, d, e) {
    return a + b + c + d + e;
}
function currying(fn) {
    const len = fn.length;
    const arr = [];
    let a = (...args) => {
        arr.push(...args);
        if (arr.length === len) {
            return fn(...arr);
        } else {
            return a;
        }
    }
    return a;
}

let newAdd = currying(add);
console.log(newAdd(1)(2, 3)(4)(6));