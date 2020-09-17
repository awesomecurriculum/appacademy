const insertion = arr => {
  let first = 0;
  for (let next = 1; next <= arr.length - 1; next++) {
    if (arr[next] >= arr[first]) {
      first = next;
      continue;
    }
    for (let cur = next - 1; cur >= 0; cur--) {
      if (cur === 0) {
        arr.unshift(...arr.splice(next, 1));
        break;
      } else if (arr[next] >= arr[cur]) {
        arr.splice(cur + 1, 0, ...arr.splice(next, 1));
        break;
      } else continue;
    }
    first++;
  }
  return arr;
};

console.log(insertion([5, 7, 2, 8, 32, 1, 230, 4, 24, 40, 14]));
