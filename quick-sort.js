function quickSort(arr) {
    let n = arr.length;
    if (n <= 1) {
        return arr;
    }

    const pivot = arr[n - 1]; 
    const left = [], right = [];

    for (let i = 0; i < n - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    
    const sortedLeft = quickSort(left);
    const sortedRight = quickSort(right);
    return [...sortedLeft, pivot, ...sortedRight]
}
console.log(quickSort([8,4,5,2,9,1]));