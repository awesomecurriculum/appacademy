const insertionSort = (arr, i = 0) => {
  while (i < arr.length - 1) {
    let j = i;
    i++;

    if (arr[i] > arr[j]) continue;

    let cur = arr[i];

    while (j >= 0 && cur < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = cur;
  }

  return arr;
};

// Complexity Analysis
// Time: O(n^2) --> O(n) if almost already sorted
// Space: O(1) *no new memory allocated

console.log(insertionSort([9, 6, 8, 2, 3, 0]));
