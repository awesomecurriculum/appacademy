// Merge Sort
// Implement a method merge_sort that sorts an Array:

// Conceptually, a merge sort works as follows:

// Continually divide the unsorted list into n sublists, until each list
// contains one element (a list of one element is considered sorted).

// Repeatedly merge sublists to produce new sorted sublists until there is only
// one sublist remaining.  This will be the sorted list.

const mergeSort = (arr, sorted = []) => {
  if (arr.length === 0) return sorted;
  let cur = arr.pop();
  return mergeSort(arr, sort(sorted, cur));
};

const sort = (sorted, n) => {
  if (sorted.length === 0) return [n];
  if (n <= sorted[0]) return [n, ...sorted];
  if (n >= sorted[sorted.length - 1]) return [...sorted, n];
  for (let i = 1; i < sorted.length; i++) {
    if (n <= sorted[i]) return [...sorted.slice(0, i), n, ...sorted.slice(i)];
  }
};

console.log(mergeSort([])); // => []
console.log(mergeSort([1])); // => [1]
console.log(mergeSort([2, 3, 1])); // => [1, 2, 3]
console.log(mergeSort([5, 2, 7, 1])); // => [1, 2, 5, 7]
console.log(mergeSort([2, 5, 1, 3, 6, 4])); // => [1, 2, 3, 4, 5, 6]
