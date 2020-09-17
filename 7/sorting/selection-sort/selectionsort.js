const findMin = arr => {
  let min = arr[0];
  let minIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
  }
  return minIndex;
};

const selectionSort = (arr, res = []) => {
  do {
    res.push(...arr.splice(findMin(arr), 1));
  } while (arr.length > 0);

  return res;
};

console.log(selectionSort([1, 5, 2, 4, 0, 3, 5, 9, 6]));
