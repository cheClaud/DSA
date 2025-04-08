// [8,4,7,5,2,8]
// [0 0 1 0 1 1 0 1 2]
// [2,4,5,7,8,8]

function countingSort(arr) {
  if (arr.length <= 1) return arr;

  const max = Math.max(...arr);
  const count = new Array(max + 1).fill(0);

  for (const num of arr) {
    count[num]++;
  }

  // [0 0 1 0 1 1 0 1 2]
  let sortedIndex = 0;
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      arr[sortedIndex] = i;
      sortedIndex++;
      count[i]--;
    }
  }
}
countingSort([8, 4, 7, 5, 2, 8]);