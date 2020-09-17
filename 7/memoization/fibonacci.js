const fib = n => (n < 3 ? 1 : fib(n - 1) + fib(n - 2));
console.log(fib(6));

function fastFib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 1 || n === 2) return 1;

  memo[n] = fastFib(n - 1, memo) + fastFib(n - 2, memo);
  return memo[n];
}

console.log(fastFib(50));

const fibo = (n, memo = { 1: 1, 2: 1 }) => (n in memo ? memo[n] : (memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo)));
console.log(fibo(50));
