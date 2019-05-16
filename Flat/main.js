/*
* 采用 深复制原理
* */

let arr = [1, 2, [3, 4]];  // 希望输出： [1, 2, 3, 4]
Array.prototype.flat = function () {
    var newArr = [];
    this.forEach((item,index) => {
        if (Array.isArray(item)) {
            newArr = newArr.concat(item.flat());
        }else {
            newArr.push(item);
        }
    });
    return newArr;
};

console.log(arr.flat());

// 斐波那契函数
function fib(n) {
    if (n === 1 || n === 2)
        return 1;
    else
        return fib(n-1) + fib(n-2);
}
console.log(fib(10));

function fib2(n) {
    let a = 1, b = 1, arr = [1, 1];
    while (arr.length < n) {
        [a, b] = [b, a + b];
        arr.push(b);
    }
    return arr;
}
console.log(fib2(10));