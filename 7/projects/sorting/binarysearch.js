const bsearch = (arr, target, lo = 0, hi = arr.length - 1) => {
  if (lo === hi && arr[lo] !== target) return -1;
  let mid = Math.floor((lo + hi) / 2);
  if (target < arr[mid]) return bsearch(arr, target, lo, mid);
  if (target > arr[mid]) return bsearch(arr, target, mid + 1, hi);
  return mid;
};

console.log(bsearch([1, 2, 3], 3));
console.log(bsearch([1, 3, 4, 5, 6], 6));
