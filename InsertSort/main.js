function InsertSort(arr) {
    for (let i = 1; i < arr.length; i ++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
let arr = [1, 3, 2, 6, 4];
console.log(InsertSort(arr));
/*
* ES6 解构赋值
* */
function InSort(arr) {
    for (let i = 1; i < arr.length; i ++) { // 让 基本值为 arr[0]，循环从 1 开始
        for (let j = i; j > 0; j --) {  // 将 arr[j] 依次插入到前面的有序段中
            if (arr[j] < arr[j - 1]) {  // 让 arr[j] 与之前的有序段依次比较大小
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            }
            else
                break;
        }
    }
    return arr;
}
let arr2 = [1, 3, 2, 6, 4];
console.log(InSort(arr));