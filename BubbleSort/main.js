let arr = [3, 1, 5, 2, 6, 4];

function BubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {  // 外层循环次数
        let flag = 0;  // 优化
        for (let j = 0; j < arr.length - 1 - i; j ++) {  // 内层两两对比
            if (arr[j] > arr[j + 1]) {  // 如果前面的比后面的大，换位置
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag = 1;
            }
        }
        if (!flag) {
            break;
        }
    }
    return arr;
}

console.log(BubbleSort(arr));

/*
* 使用 ES6 解构赋值
* */
// ========= test ============
arr3 = [1, 4, 5, 2];
[arr3[1], arr3[2]] = [arr3[0], arr3[1]];
console.log(arr3);
// ========= test ============

arr2 = [3, 1, 5, 2, 7];
function BSort(arr) {
    for (let i = 0; i < arr.length - 1; i ++) {
        let flag = 0;
        for (let j = 0; j < arr.length - 1 - i; j ++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                flag = 1;
            }
        }
        if (!flag)
            break;
    }
    return arr;
}
console.log(BSort(arr2));
