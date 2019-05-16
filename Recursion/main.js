/*
* 递归实现对 对象 的深拷贝
* */

// 浅复制
let a = 1;
let b = a;
b = 3;  // b 覆盖了之前的值
console.log(a, b);  // 1, 3

let obj1 = {a: 1, b: 2};
let obj2 = obj1;
obj2.a = 3;
console.log(obj1, obj2);  // {3, 2}, {3, 2}。 因为复制时只是传给 obj2 一个地址，1， 2指向同一个对象，所以一变都变

let obj3 = {...obj1};
console.log(obj3);
let obj4 = Object.assign({}, obj1);
console.log(obj4);

// 深复制
let obj5 = JSON.parse(JSON.stringify(obj1));  // 只能用于源对象可以序列化值，date类型就不能使用
obj5.b = 11;
console.log(obj5); // 3, 11

/*
* 出口： 历遍对象结束后return
* 递归条件：遇到引用值 Array， Object
* */
function DeepClone(origin, target) {
    var target = target || {};
    for (var key in origin) {
        if (origin.hasOwnProperty(key)) {
            if (Array.isArray(origin[key])) {
                target[key] = [];
                DeepClone(origin[key], target[key]);
            } else if (typeof origin[key] === 'object' && origin[key] != null) {
                target[key] = {};
                DeepClone(origin[key], target[key]);
            }
            else  {
                target[key] = origin[key];
            }
        }
    }
    return target;  // 出口
}
let obj = {a: 1, aa: {b: 2, bb: {c: 3}}, d: [4]};
let objDeep = DeepClone(obj);
objDeep.a = 2;
console.log(obj, objDeep);
