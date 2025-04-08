function insertionSort(arr){
    let n = arr.length
    for (let i=1;i<n; i++){

        for(let j=i; j>=0; j--){
            if(arr[j-1]>arr[j]){
                [arr[j-1],arr[j]]=[arr[j],arr[j-1]]
            }else{
                break;
            }

        }

    }
    return arr
}
let nums = [10, 1, 19, 15, 35];
console.log(insertionSort(nums));