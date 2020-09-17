const isAnagram = (a, b, chars = {}) => {
  if (a.length !== b.length) return false;

  for (c of a.split('')) {
    if (chars[c]) chars[c]++;
    else chars[c] = 1;
  }

  for (c of b.split('')) {
    if (chars[c]) chars[c]--;
    else return false;
  }

  return true;
};

console.log(isAnagram('abboa', 'aabob')); // true
console.log(isAnagram('gizmo', 'sally')); // false
console.log(isAnagram('elvis', 'lives')); // true
console.log(isAnagram('cautioned', 'education')); // true
