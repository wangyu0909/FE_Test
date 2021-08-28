/**
 *  this 指向问题
 * 1.在函数体中，非显式或隐式的调用函数时，
 *   在严格模式下，函数内的this会被绑定到undefined上，
 *   在非严格模式下则会被绑定到全局对象上。
 * 2.一般使用new 方法调用构造函数时，构造函数内的this会被绑定到新创建的对象上
 * 3.一般通过call、apply、bind方法显式调用函数时，函数体内的this会被绑定到指定参数的对象上
 * 4.一般通过上下文调用函数时，函数体内的this会被绑定到该对象上
 * 5.在箭头函数中，this的指向是由外层作用域决定的。箭头函数的绑定无法被修改
 */


function fn1() {
    console.log(this);
}
function fn2() {
    'use strict'
    console.log(this);
}

fn1(); // window
fn2(); // undefined

const foo = {
    bar: 10,
    fn: function () {
        console.log(this.bar);
    }
}
const foo1 = foo.fn; // 函数赋值在全局变量foo1上，foo1的this指向window

foo1(); // undefined
foo.fn(); // 10

// 上下文对象调用中的this，指向最后调用它的对象
const person = {
    name: 'wangyu',
    wife: {
        name: 'jiangyu',
        fn: function () {
            return this.name;
        }
    }
}
console.log(person.wife.fn()); // jiangyu 

const o1 = {
    text: 'o1',
    fn: function () {
        return this.text;
    }
}

const o2 = {
    text: 'o2',
    fn: function () {
        return o1.fn();
    }
}

const o3 = {
    text: 'o3',
    fn: function () {
        const fn = o1.fn;
        return fn();
    }
}

console.log(o1.fn()); // o1
console.log(o2.fn()); // o1
console.log(o3.fn()); // undefined

function foo2(a) {
    this.a = a;
}
var obj1 = {};
var bar = foo2.bind(obj1); // this指向obj1
bar(2);
console.log(obj1.a); // 2

var baz = new bar(3);
console.log(baz.a); // 3
