// Array Subsets
// Write a method subsets that will return all subsets of an array.

// Hint: For subsets([1, 2, 3]), there are two kinds of subsets:

// Those that do not contain 3(all of these are subsets of[1, 2]).
// For every subset that does not contain 3, there is also a corresponding
// subset that is the same, except it also does contain 3.

// console.log(subsets([])) // => [[]]
// console.log(subsets([1])) // => [[], [1]]
// console.log(subsets([1, 2])) // => [[], [1], [2], [1, 2]]
// console.log(subsets([1, 2, 3]))
// => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

// Those that do not contain 3(all of these are subsets of[1, 2]).
// For every subset that does not contain 3, there is also a corresponding
// subset that is the same, except it also does contain 3.

/*
base case: arr.length === 0;

recursive case: arr.length > 0;

recursive step: remove last item
let b = arr.pop();
let a = arr;
a.forEach(ele => {
  res.push([ele]);
  res.push([ele, b]);
})
res.push(
  [...a],
  [...a, b]
  )
return subsets(a);

res =
*/

const subsets = (arr) => {
  let res = [];
  console.log("res @ start: ", res);
  if (arr.length === 0) {
    console.log("res 0: ", res);
    return res.push([]);
  }
  pushSubsets(arr, res);
  console.log("final res: ", res);
  return res;
};

const pushSubsets = (arr, res) => {
  console.log("res @ start of loop: ", res);
  if (arr.length === 0) return res;
  let b = arr.pop();
  console.log("b: ", b);
  let a = arr;
  console.log("a: ", a);
  res.push([...a, b], [...a]);
  console.log("res after pushing [...a, b] [...a]: ", res);
  a.forEach((ele) => res.push([ele], [ele, b]));
  console.log("res after pushing [ele] [ele, b]: ", res);
  return pushSubsets(a, res);
};

// console.log(subsets([])); // => [[]]
// console.log(subsets([1])); // => [[], [1]]
console.log(subsets([1, 2])); // => [[], [1], [2], [1, 2]]
// console.log(subsets([1, 2, 3])); // => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
