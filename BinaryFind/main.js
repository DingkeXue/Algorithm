function binaryFind(arr, key) {
    let low = 0, high = arr.length - 1 ;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === key) {
            return `位置在${mid + 1}`;
        }
        if (arr[mid] > key) {
            high = mid - 1;
        }
        else if (arr[mid] < key) {
            low = mid + 1;
        }
    }
    return -1;
}
let arr = [1, 2, 4];
console.log(binaryFind(arr, 3));