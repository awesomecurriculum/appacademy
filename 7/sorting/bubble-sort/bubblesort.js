const bubblesort = arr => {
  let unsorted = false;

  do {
    unsorted = false;
    for (let i = 0, j = i + 1; j < arr.length; i++, j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        unsorted = true;
      }
    }
  } while (unsorted);

  return arr;
};

console.log(bubblesort([1, 3, 5, 2, 4, 0]));
