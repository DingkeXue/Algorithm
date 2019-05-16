function ShellSort(arr, step) {
    for (let i = 0; i < step.length; i ++) { //外层循环，依次取输入的步长
        let n = step[i];  // 步长为 n
        for (let i = 0; i < arr.length; i ++) { // 和插入排序一样，
            for (let j = i; j > 0; j -= n) {  // 插入排序每次和前面一位的比较，这里每次和前面的 第 n 位进行比较
                if (arr[j] < arr[j - n]) {
                    [arr[j - n], arr[j]] = [arr[j], arr[j - n]];
                } else {
                    continue;
                }
            }
        }
    }
    return arr;
}

let arr = [3, 2, 45, 6, 55, 23, 5, 4, 8, 9, 19, 0];
let step = [5, 3, 1];
console.log(ShellSort(arr, step));