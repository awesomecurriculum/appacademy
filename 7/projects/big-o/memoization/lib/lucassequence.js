/* The Lucas Sequence is like the Fibonacci Sequence, except that its two seed
values are:
  The 0-th number of the Lucas Sequence is 2.
  The 1-st number of the Lucas Sequence is 1.
 */

const lucas = (n, memo = { 0: 2, 1: 1 }) => (n in memo ? memo[n] : (memo[n] = lucas(n - 1, memo) + lucas(n - 2, memo)));
console.log(lucas(0)); // => 2
console.log(lucas(1)); // => 1
console.log(lucas(40)); // => 228826127
console.log(lucas(41)); // => 370248451
console.log(lucas(42)); // => 599074578
