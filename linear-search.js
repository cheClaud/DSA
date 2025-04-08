//[8,4,5,2,9,1]
function linearSearch(arr, target) {
    let n = arr.length;
    for(let i = 0; i < n; i++){
        if(arr[i] === target){
            return `index ${i} is ${target}`;
        }
    }
    return 'target not found'
}

console.log(linearSearch([8, 4, 5, 2, 9, 1], 5));