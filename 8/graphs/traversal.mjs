import GraphNode from './GraphNode.mjs';

let a = new GraphNode('a');
let b = new GraphNode('b');
let c = new GraphNode('c');
let d = new GraphNode('d');
let e = new GraphNode('e');
let f = new GraphNode('f');

a.neighbors = [e, c, b];
c.neighbors = [b, d];
e.neighbors = [a];
f.neighbors = [e];

// H:

// DO: Decide what node to begin traversal from

// n: F is only valid choice because it is the only node that may access all other nodes through some path of edges

const brokenDepthFirstRecur = node => {
  console.log(node.val);

  node.neighbors.forEach(neighbor => depthFirstRecur(neighbor));
};

// FIXME: Code above goes into infinite loop!

const depthFirstRecur = (node, visited = new Set()) => {
  // $: if this node has already been visited, return early
  if (visited.has(node.val)) return;

  // $: otherwise node hasn't been visited yet, so print it's val and mark it as visited
  console.log(node.val);
  visited.add(node.val);

  // $: then explor each of its neighbors
  node.neighbors.forEach(neighbor => depthFirstRecur(neighbor, visited));
};

depthFirstRecur(f);

const depthFirstIter = node => {
  let visited = new Set();
  let stack = [node];

  while (stack.length) {
    let node = stack.pop();

    // n: if this node has already been visited, skip it
    if (visited.has(node.val)) continue;

    // n: otherwise it hasn't yet been visited, so print it's val and mark it as visited
    console.log(node.val);
    visited.add(node.val);

    // n: then add its neighbors to the stack to be explored
    stack.push(...node.neighbors);
  }
};

depthFirstIter(f);
