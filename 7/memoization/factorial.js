let memo = {};

function factorial(n) {
  if (n in memo) {
    console.log('fetching memo for', n);
    return memo[n];
  }
  if (n === 1) return 1;
  let res = n * factorial(n - 1);
  console.log('storing memo for', n);
  memo[n] = res;
  return res;
}

console.log(factorial(8));

const fact = (n, memo = {}) => (n in memo ? memo[n] : n === 1 ? 1 : (memo[n] = n * factorial(n - 1)));

console.log(fact(8));
