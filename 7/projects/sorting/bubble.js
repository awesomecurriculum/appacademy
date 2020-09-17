const bubbleSort = arr => {
  let unsorted = false;
  do {
    unsorted = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        unsorted = true;
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
  } while (unsorted);
  return arr;
};

console.log(bubbleSort([1, 4, 6, 2, 3, 0]));
