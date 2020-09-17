// Write a function, maxNonAdjacentSum(nums), that takes in an array of
// nonnegative numbers. The function should return the maximum sum of elements
// in the array we can get if we cannot take adjacent elements into the sum.
//
// Solve this problem with tabulation.
// Once you're done, come back and try to solve it with memoization.
//
// Examples:
//

maxNonAdjacentSum = nums => {
  if (nums.length === 0) return 0;
  const tb = new Array(nums.length).fill(0);
  tb[0] = nums[0];
  for (let cur = 1; cur < tb.length; cur++) {
    let withCur = nums[cur] + (tb[cur - 2] > 0 ? tb[cur - 2] : 0);
    let withoutCur = tb[cur - 1];
    tb[cur] = Math.max(withCur, withoutCur);
  }
  console.log(tb);
  return tb[tb.length - 1];
};

console.log(maxNonAdjacentSum([2, 7, 9, 3, 4])); // => 15, because 2 + 9 + 4
console.log(maxNonAdjacentSum([4, 2, 1, 6])); // => 10, because 4 + 6
