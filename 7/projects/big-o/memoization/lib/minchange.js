const minChange = (coins, amount, memo = { 0: 0 }) => {
  if (amount in memo) return memo[amount];
  mem;
  for (let c = coins[coins.length - 1]; c >= 0; c--) {
    for (let a = 1; a <= amount; a++) {
      if (a < c) continue;
      const min = a % c ? a / c : 0;
      if (min < memo[a]) memo[a] = min;
    }
    for (c of coins) {
    }
  }
};

console.log(minChange([1, 2, 5], 11)); // => 3, because 5 + 5 + 1 = 11
console.log(minChange([1, 4, 5], 8)); // => 2, because 4 + 4 = 8
console.log(minChange([1, 5, 10, 25], 15)); // => 2, because 10 + 5 = 15
console.log(minChange([1, 5, 10, 25], 100)); // => 4, because 25 + 25 + 25 + 25 = 100
