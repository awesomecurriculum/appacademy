/***********************************************************************
Write a recursive function called `sum` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!
Examples:
sum([1, 2, 3]); // => 6
sum([0, 1, -3]); // => -2
sum([1, 2, 3, 4, 5]); //=> 15
***********************************************************************/

const sum_ = nums => nums.reduce((acc, ele) => (acc += ele));

const sum = (nums, i = nums.length) => {
  i--;
  if (i === 0) return nums[i];
  return nums[i] + sum(nums.slice(0, i));
};

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sum;
} catch {
  module.exports = null;
}
