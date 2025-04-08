function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let middleIndex = Math.floor(arr.length/2)

    let left = arr.slice(0, middleIndex);
    let right = arr.slice(middleIndex);

    let leftArr = mergeSort(left);
    let rightArr =mergeSort(right)
    



    return merge(leftArr, rightArr)
}

function merge(leftArr, rightArr) {
    let sortedArr = [];
    while(leftArr.length && rightArr.length) {
        if(leftArr[0] < rightArr[0]) {
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }

    return [...sortedArr,...leftArr,...rightArr]
}


console.log(mergeSort([8, 4, 5, 2, 9, 1]));