const isNewRegion = (node, graph, visited) => {
  if (visited.has(node)) return false;
  visited.add(node);
  graph[node].forEach(n => isNewRegion(n, graph, visited));
  return true;
};

const numRegions = graph => {
  let regions = 0;
  const visited = new Set();

  for (node in graph) {
    if (isNewRegion(node, graph, visited)) regions++;
  }

  return regions;
};

module.exports = { numRegions };
