function QuickSort(arr) {
    if (arr.length <= 1) {
        return arr;  // 递归出口
    }
    let left = [];
    let right = [];
    let content = arr.splice(0, 1);
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] < content) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return QuickSort(left).concat(content, QuickSort(right));
}
let arr = [3, 2, 6, 8, 1, 5];
console.log(QuickSort(arr));

/*
* ES6 解构赋值
* */
function QSort(arr) {
    if (arr.length <= 1)
        return arr;
    let left = [], right = [], current = arr.splice(0, 1);
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] < current) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...QSort(left), ...current, ...QSort(right)];
}
let arr2 = [3, 2, 6, 8, 1, 5];
console.log(QSort(arr2));