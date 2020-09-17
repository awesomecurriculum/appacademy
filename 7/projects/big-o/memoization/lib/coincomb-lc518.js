const coinComb = (amount, coins) => {
  if (amount && !coins) return 0;
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  for (let c of coins) {
    for (let a = 1; a <= amount; a++) {
      if (a < c) continue;
      dp[a] += dp[a - c];
    }
  }
  return dp[amount];
};
