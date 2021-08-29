function fn() {
    console.log('吃饭');
}

function after(callback, times) {
    return () => {
        if (--times === 0) {
            callback();
        }
    }
}

var newFn = after(fn, 3);
newFn();
newFn();
newFn();
newFn();

function say() {
    console.log('说话');
}

Function.prototype.before = function (callback) {
    return () => {
        callback();
        this();
    }
}

const foo = say.before(function () {
    console.log('before');
});

foo();