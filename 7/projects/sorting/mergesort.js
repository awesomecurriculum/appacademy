const merge = (a, b) => {
  const sorted = [];
  while (a.length && b.length) {
    if (a[0] < b[0]) sorted.push(a.shift());
    else sorted.push(b.shift());
  }
  return [...sorted, ...a, ...b];
};

const mergeSort = (arr, mid = arr.length / 2) => {
  if (arr.length <= 1) return arr;
  const a = arr.slice(0, mid);
  const b = arr.slice(mid);
  return merge(mergeSort(a), mergeSort(b));
};

// Complexity Analysis
// Time: O(nlogn)
// Space: O(nlogn)

console.log(mergeSort([1, 5, 3, 9, 20, 10, 32, 2, 4]));
