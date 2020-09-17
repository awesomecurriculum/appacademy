// const { performance } = require('perf_hooks');

// function swap(array, idx1, idx2) {
//   let temp = array[idx1]; // save a copy of the first value
//   array[idx1] = array[idx2]; // overwrite the first value with the second value
//   array[idx2] = temp; // overwrite the second value with the first value
// }

// // Use this pseudocode to implement the bubble sort

// let t1 = performance.now();
// function bubbleSort(array) {
//   let swapped = false;
//   let n = array.length;
//   do {
//     swapped = false;
//     for (let i = 1; i < n; i++) {
//       if (array[i - 1] > array[i]) {
//         swap(array, i - 1, i);
//         swapped = true;
//       }
//     }
//   } while (swapped);

//   return array;
// }
// let array1 = [2, -1, 4, 3, 7, 3];
// bubbleSort(array1);
// let t2 = performance.now();
// console.log(`time elapsed: ${t2 - t1}`);

// n := length(array)
// repeat
//  swappe d = false
//  for i := 1 to n - 1 inclusive do
//
//     /* if this pair is out of order */
//     if A[i - 1] > A[i] then
//
//       /* swap them and remember something changed */
//       swap(A[i - 1], A[i])
//       swapped := true
//
//     end if
//   end for
// until not swapped

const swap = (arr, i, j, temp) => {
  arr[i] = arr[j];
  arr[j] = temp;
};

const bubbleSort = arr => {
  let unsorted = true;
  do {
    unsorted = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        unsorted = true;
        swap(arr, i, i + 1, arr[i]);
      }
    }
  } while (unsorted);
  return arr;
};

module.exports = {
  bubbleSort,
  swap,
};
