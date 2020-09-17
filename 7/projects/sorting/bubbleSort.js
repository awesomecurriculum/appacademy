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

// Complexity Analysis
// Time: O(n^2)
// Space: O(1)

console.log(bubbleSort([9, 6, 8, 2, 3, 0]));

// const bubbleSort = arr => {
//   let unsorted = true;
//   while (unsorted) {
//     unsorted = false;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > arr[i + 1]) {
//         unsorted = true;
//         swap(arr, i, i + 1, arr[i]);
//       }
//     }
//   }
//   return arr;
// };
