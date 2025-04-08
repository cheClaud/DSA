function selectionSort(arr){
let n=arr.length;
for (let i = 0; i < n-1;i++){
    let minimumIndex=i;
    for (let j = i+1; j < n; j++) {
        if(arr[j]<arr[i]){
            minimumIndex=j;
        }
        
    }
    [arr[i],arr[minimumIndex]]=[arr[minimumIndex],arr[i]]
}
return arr;
}   
let nums = [10, 1, 19, 15, 35];
console.log(selectionSort(nums));