function bubbleSort(arr){
    let n = arr.length;
    for(let i=0; i<n-1; i++){
        let isSwaped=false;
        for(let j=0; j<n-i-1; j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1], arr[j]]
                isSwaped=true;
            }
        }
        if(!isSwaped) break;
    }
    return arr;
}
let nums=[10, 1, 19, 15,35]
console.log(bubbleSort(nums));