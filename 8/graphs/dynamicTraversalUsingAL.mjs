import GraphNode from './GraphNode.mjs';

// NOTE: 'Forest Graph' because multiple trees
let graph = {
  h: ['i', 'j'],
  i: [],
  j: ['k'],
  k: [],
  l: ['m'],
  m: [],
};

// NOTE: refactored using surrounding loop to allow traversal to jump between disconnected regions of graph

const depthFirst = graph => {
  let visited = new Set();

  for (let node in graph) {
    _depthFirstRecur(node, graph, visited);
  }
};

const _depthFirstRecur = (node, graph, visited) => {
  if (visited.has(node)) return;

  console.log(node);
  visited.add(node);
  graph[node].forEach(neighbor => _depthFirstRecur(neighbor, graph, visited));
};

depthFirst(graph);

/* NOTE: We enter depthFirst and for loop begins on (h).
Enter _depthFirstRecur and explore 'local' region as far as possible.
At end of recursion, entire connected region (h, i, j, k) explored and nodes added to visited.
Return to main depthFirst function.
Continue for loop and iterate until hit an unvisited node (l).
Enter _depthFirstRecur and explore 'local' region as far as possible.
Hit last node (m) and add it to visited.
Return to main depthFirst function.
 */
