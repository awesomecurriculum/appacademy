const findMin = (arr, min) => {
  for (let j = min + 1; j < arr.length; j++) {
    if (arr[j] < arr[min]) min = j;
  }
  return min;
};

const swap = (arr, i, min) => {
  let temp = arr[i];
  arr[i] = arr[min];
  arr[min] = temp;
};

const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let min = findMin(arr, i);
    swap(arr, i, min);
  }
  return arr;
};

console.log(selectionSort([1, 4, 6, 2, 3, 0]));
