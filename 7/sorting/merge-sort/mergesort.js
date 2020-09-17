const mergesort = arr => {
  if (arr.length === 1) return arr;
  let a = arr.slice(0, arr.length / 2);
  let b = arr.slice(arr.length / 2);
  a = mergesort(a);
  b = mergesort(b);
  return merge(a, b);
};

const merge = (a, b) => {
  const res = [];
  while ((a.length > 0) & (b.length > 0)) {
    if (a[0] > b[0]) res.push(...b.splice(0, 1));
    else res.push(...a.splice(0, 1));
  }
  while (a.length > 0) {
    res.push(...a.splice(0, 1));
  }
  while (b.length > 0) {
    res.push(...b.splice(0, 1));
  }
  return res;
};

console.log(mergesort([1, 3, 5, 2, 4]));
