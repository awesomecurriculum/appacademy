// Write a function, stepper(nums), that takes in an array of non negative
// numbers. Each element of the array represents the maximum number of steps you
// can take from that position in the array. The function should return a
// boolean indicating if it is possible to travel from the first position of the
// array to the last position.
//
// For Example:
//
// Given [3, 1, 0, 5, 10]
//   - We begin at first position, 3.
//   - Since the element is 3 we can take up to 3 steps from this position.
//   - This means we can step to the 1, 0, or 5
//   - Say we step to 1
//   - Since the element is 1, now the only option is to take 1 step to land
//   on 0
//   - etc...
//
// Solve this problem with tabulation.
// Once you're done, come back and try to solve it with memoization.
//
// Examples:
//
// stepper([3, 1, 0, 5, 10]);           // => true, because we can step through
//                                      //          elements 3 -> 5 -> 10
// stepper([3, 4, 1, 0, 10]);           // => true, because we can step through
//                                      //          elements 3 -> 4 -> 10
// stepper([2, 3, 1, 1, 0, 4, 7, 8])    // => false, there is no way to step to
//                                      //           the end
exports.stepper = nums => {};
