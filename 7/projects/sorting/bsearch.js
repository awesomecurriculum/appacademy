const binarySearchIndex = (arr, t, low = 0, high = arr.length - 1) => {
  if (low === high && arr[low] !== t) return -1;
  const mid = Math.floor((low + high) / 2);
  if (t < arr[mid]) return binarySearchIndex(arr, t, low, mid - 1);
  if (t > arr[mid]) return binarySearchIndex(arr, t, mid + 1, high);
  return mid;
};

const binarySearch = (arr, t, low = 0, high = arr.length - 1) => {
  if (low === high && arr[0] !== t) return -1;
  const mid = Math.floor((low + high) / 2);
  if (t < arr[mid]) return binarySearch(arr, t, low, mid - 1);
  if (t > arr[mid]) return binarySearch(arr, t, mid + 1, high);
  return mid;
};

// Complexity Analysis
// Time: O(log n)
// Space: O(1)
