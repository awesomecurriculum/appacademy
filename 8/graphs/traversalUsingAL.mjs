import GraphNode from './GraphNode.mjs';

let graph = {
  a: ['b', 'c', 'e'],
  b: [],
  c: ['b', 'd'],
  d: [],
  e: ['a'],
  f: ['e'],
};

// NOTE: using Adjacency List representation

const depthFirstRecur = (node, graph, visited = new Set()) => {
  if (visited.has(node)) return;
  console.log(node);
  visited.add(node);
  graph[node].forEach(neighbor => depthFirstRecur(neighbor, graph, visited));
};

depthFirstRecur('f', graph);

// TODO: depthFirstIter()

const depthFirstIter = () => {};
