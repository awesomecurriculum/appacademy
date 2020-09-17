const stepper = nums => {
  let tab = new Array(nums.length).fill(false);
  tab[0] = true;
  for (let i = 0; i < nums.length; i++) {
    if (tab[i] === false) return tab[nums.length - 1];
    let steps = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (steps > 0) tab[j] = true;
      steps--;
    }
  }
  return tab[nums.length - 1];
};

const maxNonAdjacentSum = nums => {
  if (nums.length === 0) return 0;
  const tb = new Array(nums.length).fill(0);
  tb[0] = nums[0];
  for (let cur = 1; cur < tb.length; cur++) {
    let withCur = nums[cur] + (tb[cur - 2] > 0 ? tb[cur - 2] : 0);
    let withoutCur = tb[cur - 1];
    tb[cur] = Math.max(withCur, withoutCur);
  }
  return tb[tb.length - 1];
};

const minChange = (coins, amount) => {
  if (amount === 0) return 0;
  const amounts = new Array(amount + 1).fill(Infinity);
  amounts[0] = 0;
  for (let coin = 0; coin < coins.length; coin++) {
    for (let amt = 1; amt < amounts.length; amt++) {
      if (coins[coin] > amt) continue;
      const min = amounts[amt - coins[coin]] + 1;
      if (min < amounts[amt]) amounts[amt] = min;
    }
  }
  return amounts[amount];
};

module.exports = {
  stepper,
  maxNonAdjacentSum,
  minChange,
};
