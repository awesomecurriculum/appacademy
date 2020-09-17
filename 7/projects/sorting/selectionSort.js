const findMin = (arr, min, j) => {
  while (j < arr.length) {
    if (arr[j] < arr[min]) min = j;
    j++;
  }
  return min;
};

const swap = (arr, i, min, temp) => {
  arr[i] = arr[min];
  arr[min] = temp;
};

const selectionSort = (arr, i = 0) => {
  while (i < arr.length) {
    let min = findMin(arr, i, i + 1);
    swap(arr, i, min, arr[i]);
    i++;
  }
  return arr;
};

// Complexity Analysis
// Time: O(n^2)
// Space: O(1)

console.log(selectionSort([1, 4, 6, 2, 3, 0]));
