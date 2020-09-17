const friendsOf = (list, name, distance) => {
  const visited = new Set();

  const names = Object.keys(list);
  if (!names.length) return undefined;
  if (!names.includes(name)) return undefined;

  let que = list[name];

  while (distance) {
    if (!que.length) break;
    let next = [];
    while (que.length) {
      let cur = que.shift();
      if (visited.has(cur) || cur === name) continue;
      next = [...next, ...list[cur]];
      visited.add(cur);
    }
    que = next;
    distance--;
  }

  return Array.from(visited);
};

module.exports = { friendsOf };
