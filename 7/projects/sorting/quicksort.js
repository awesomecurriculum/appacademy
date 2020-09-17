const quickSort = arr => {
  if (arr.length <= 1) return arr;
  const pivot = arr.shift();
  const left = arr.filter(n => n <= pivot);
  const right = arr.filter(n => n > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
};

// Complexity Analysis
// Time: O(n^2) --> O(n log n) when all elements not already sorted
// Space: O(n^2) --> O(n log n) when all elements not already sorted *O(log n) for in-place

console.log(quickSort([1, 5, 3, 9, 20, 10, 32, 2, 4]));
