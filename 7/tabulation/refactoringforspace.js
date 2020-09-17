function fib(n) {
  let mostRecent = [0, 1];

  if (n === 0) return mostRecent[0];

  for (let i = 2; i <= n; i++) {
    const [secondLast, last] = mostRecent;
    mostRecent = [last, secondLast + last];
  }

  return mostRecent[1];
}
