const stepper = nums => {
  let tab = new Array(nums.length).fill(false);
  tab[0] = true;
  for (let i = 0; i < nums.length; i++) {
    if (tab[i] === false) return false;
    let steps = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (steps > 0) tab[j] = true;
      steps--;
    }
  }
  return tab[tab.length - 1];
};

console.log(stepper([3, 1, 0, 5, 10]));
console.log(stepper([3, 4, 1, 0, 10]));
console.log(stepper([2, 3, 1, 1, 0, 4, 7, 8]));
