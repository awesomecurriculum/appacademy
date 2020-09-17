/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the
two previous numbers in the sequence together to form the next one:

0, 1, 1, 2, 3, 5, 8, etc....

We count Fibonacci numbers beginning with the first 1. Take a look at the
examples below if you're unsure where to start!

Examples:

fibonacci(1); // => 1
fibonacci(2); // => 1
fibonacci(3); // => 2
fibonacci(4); // => 3
***********************************************************************/

const fib = (n, mem = [1, 1, 1]) => (mem[n] ? mem[n] : (mem[n] = fib(n - 1, mem) + fib(n - 2, mem)));

const fibonacci = n => (n > 2 ? fibonacci(n - 1) + fibonacci(n - 2) : 1);

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = fibonacci;
} catch {
  module.exports = null;
}
