// Permutations
// Write a recursive method permutations(array) that calculates all the
// permutations of the given array.

// console.log(permutations([])) // => [[]]
// console.log(permutations([1])) // => [[1]]
// console.log(permutations([1, 2, 3])) // => [[1, 2, 3], [1, 3, 2],
// // [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

/*
base case: arr.length === 0

recursive case: arr.length > 0;

recursive step:
- arr.shift() => [1] arr => [2, 3]
-

*/

// const permutations = (nums) => {
//   const res = [];
//   let count = 0;

//   const backtrack = (cur, rest, count) => {
//     count++;
//     console.log(`loop count: ${count}
//     cur: ${cur}
//     rest: ${rest}
//     res: ${res}`);
//     if (rest.length === 0) return res.push(cur);
//     for (let i = 0; i < rest.length; i++) {
//       backtrack([...cur, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)], count);
//       console.log(`i: ${i}
//       cur: ${cur}
//       rest: ${rest}
//       res: ${res}`);
//     }
//   };

//   backtrack([], nums, count);
//   return res;
// };

// const permutations = (nums) => {
//   const res = [];

//   const backtrack = (cur, rest, count = 0, first = 0) => {
//     console.log(`first: ${first}`);
//     count++;
//     console.log(`count: ${count}`);
//     console.log(`loop count: ${count}
//     cur: ${cur}
//     rest: ${rest}
//     res: ${res}`);

//     if (first === )
//     if (rest.length === 0) return res.push(cur);
//     for (let i = 0; i < rest.length; i++) {
//       backtrack([...cur, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)], count);
//       console.log(`i: ${i}
//       cur: ${cur}
//       rest: ${rest}
//       res: ${res}`);
//     }
//   };

//   backtrack([], nums, count);
//   return res;

const permutations = function (nums) {
  const res = [];
  const temp = [];
  // we are using a common strategy to initialize an 'answer' object, and pass it into
  // a recursion helper to modify the values. Sometimes it helps to separate this because
  // there are times you will want to have conditionals or a for loop in the top level code
  // before you call a recursive function.
  findPermutations(temp, nums, res);
  return res;
};

const findPermutations = (temp, nums, res) => {
  let level = temp.length + 1;
  if (!nums.length) {
    console.log(`
      @ res.push(temp.concat()):
        i: ${i}
        level: ${level}
        temp: ${temp}
        curr num: ${currNum}
        nums: ${nums}
        res: ${res}`);
    // Here it is important to call concat(), just a fancy way of copying the original array.
    // See what happens when you remove concat, things will go crazy because you are
    // modifying an object that is referenced elsewhere!
    res.push(temp.concat());
    console.log(`
    res @:
      i: ${i}
      level: ${level}
      temp: ${temp}
      curr num: ${currNum}
      nums: ${nums}
      res: ${res}`);
    return;
  }

  for (var i = 0; i < nums.length; i++) {
    var currNum = nums[i];
    console.log(`
    @ start of for loop:
      i: ${i}
      level: ${level}
      temp: ${temp}
      curr num: ${currNum}
      nums: ${nums}
      res: ${res}`);
    // we've picked our new number to add, so add it to our "picked" array called temp
    temp.push(currNum);
    // remember, in the first iteration, after picking 1, we need to pass in [2, 3] as the numbers left.
    console.log(`
      @ temp.push(currNum):
        i: ${i}
        level: ${level}
        temp: ${temp}
        curr num: ${currNum}
        nums: ${nums}
        res: ${res}`);
    nums.splice(i, 1);
    findPermutations(temp, nums, res);
    // Remember to "reset" our temp and nums array before our next iteration, where we pick the 2, and leave [1,3]
    console.log(`
      @ pop and slice:
        i: ${i}
        level: ${level}
        temp: ${temp}
        curr num: ${currNum}
        nums: ${nums}
        res: ${res}`);
    temp.pop();
    nums.splice(i, 0, currNum);

    console.log(`
      @ end of i = ${i}:
        level: ${level}
        temp: ${temp}
        curr num: ${currNum}
        nums: ${nums}
        res: ${res}`);
  }
};

// console.log(permutations([])); // => [[]]
// console.log(permutations([1])); // => [[1]]
console.log(permutations([1, 2, 3])); // => [[1, 2, 3], [1, 3, 2],
// [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
