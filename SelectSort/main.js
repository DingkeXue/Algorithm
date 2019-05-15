function SelectSort(arr) {
    for (let i = 0; i < arr.length - 1; i ++) {  // 外部循环 i 表示第几轮，arr[i] 就表示当前轮次最小的值
        for (let j = i; j < arr.length; j ++) {  // 内层从 i 开始，依次往后找数，如果找到比 arr[i] 小，则互换位置
            if (arr[j] < arr[i]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
}
let arr = [3, 1, 6, 2];
console.log(SelectSort(arr));

/*
* ES6 解构赋值
* */
function SeSort(arr) {
    for (let i = 0; i < arr.length - 1; i ++) {
        for (let j = i; j < arr.length; j ++) {
            if (arr[j] < arr[i]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
}
arr2 = [3, 1, 6, 2];
console.log(SeSort(arr2));