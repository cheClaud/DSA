function binarySearch(arr, target) {
    let rightIndex = arr.length-1;
    let leftIndex = 0;
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((rightIndex + leftIndex)/2);
        if(arr[middleIndex] === target) return `index ${middleIndex} is ${target}`;

        if(target < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
        
    }
    return 'target not found'
}
console.log(binarySearch([2,4,6,8,18], 18))