import GraphNode from './graph.mjs';

let a = new GraphNode('a');
let b = new GraphNode('b');
let c = new GraphNode('c');
let d = new GraphNode('d');
let e = new GraphNode('e');
let f = new GraphNode('f');

a.neighbors = [b, c, e];
c.neighbors = [b, d];
e.neighbors = [a];
f.neighbors = [e];

// SECTION: Adjacency Matrix

let matrix = [
  /*          A       B       C       D       E       F   */
  /*A*/ [true, true, true, false, true, false],
  /*B*/ [false, true, false, false, false, false],
  /*C*/ [false, true, true, true, false, false],
  /*D*/ [false, false, false, true, false, false],
  /*E*/ [true, false, false, false, true, false],
  /*F*/ [false, false, false, false, true, true],
];

// NOTE: row index corresponds to the source of an edge
// NOTE: col index corresponds to its destination

// NOTE: when edges have direction, matrix[i][j] may not be the same as matrix[j][i]
// NOTE: it's common to say that a node is adjacent to itself, so matrix[x][x] === true for any x

// NOTE: space complexity = O(n^2)

// SECTION: Adjacency List

let graph = {
  a: ['b', 'c', 'e'],
  b: [], // directed graph because only including outgoing edges
  c: ['b', 'd'],
  d: [],
  e: ['a'],
  f: ['e'],
};

// NOTE: keys represent node labels
// NOTE: values are arrays containing all adjacent nodes

// NOTE: space complexity will be number of edges in the graph
// NOTE: space complexity = O(n^2) worst case
