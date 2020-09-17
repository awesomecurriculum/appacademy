const minChange = (coins, amount) => {
  if (amount === 0) return 0;
  const amounts = new Array(amount + 1).fill(Infinity);
  amounts[0] = 0;
  for (let coin = 0; coin < coins.length; coin++) {
    for (let amt = 1; amt < amounts.length; amt++) {
      if (coins[coin] > amt) continue;
      const curMin = amounts[amt - coins[coin]] + 1;
      if (curMin < amounts[amt]) amounts[amt] = curMin;
    }
  }
  return amounts[amount];
};

console.log(minChange([1, 2, 5], 11)); // => 3, because 5 + 5 + 1 = 11
console.log(minChange([1, 4, 5], 8)); // => 2, because 4 + 4 = 8
console.log(minChange([1, 5, 10, 25], 15)); // => 2, because 10 + 5 = 15
console.log(minChange([1, 5, 10, 25], 100)); // => 4, because 25 + 25 + 25 + 25 = 100

module.exports = minChange;
