const breadthFirstSearch = (node, target) => {
  let que = [node];
  let visited = new Set();

  while (que.length) {
    let curNode = que.shift();
    if (target === curNode.val) return curNode;
    for (let n of curNode.neighbors) {
      if (visited.has(n)) continue;
      visited.add(n);
      que.push(n);
    }
  }
  return null;
};

module.exports = { breadthFirstSearch };
