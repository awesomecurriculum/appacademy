const bst = (arr, val, adj = 0) => {
  if (arr.length === 0) return null;
  let mid = Math.floor((arr.length - 1) / 2);
  if (arr[mid] === val) return mid + adj;
  if (arr[mid] > val) return bst(arr.slice(0, mid), val, adj);
  return bst(arr.slice(mid + 1), val, (adj += mid + 1));
};

console.log(bst([1, 2, 3], 1)); // => 0
console.log(bst([2, 3, 4, 5], 3)); // => 1
console.log(bst([2, 4, 6, 8, 10], 6)); // => 2
console.log(bst([1, 3, 4, 5, 9], 5)); // => 3
console.log(bst([1, 2, 3, 4, 5, 6], 6)); // => 5
console.log(bst([1, 2, 3, 4, 5, 6], 0)); // => null
console.log(bst([1, 2, 3, 4, 5, 7], 6)); // => null
