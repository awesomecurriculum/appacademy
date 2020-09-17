function maxValue(node, visited = new Set()) {
  const que = [node];
  let max = -Infinity;
  while (que.length) {
    let curNode = que.shift();
    if (curNode.val > max) max = curNode.val;
    for (let n of curNode.neighbors) {
      if (visited.has(n)) continue;
      visited.add(n);
      que.push(n);
    }
  }
  return max;
}

module.exports = { maxValue };
