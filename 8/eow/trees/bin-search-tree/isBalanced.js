//  https://leetcode.com/problems/balanced-binary-tree/

const measureHeight = node => {
  let height, heightLeft, heightRight, heightDif;
  if (!node) return 0;
  heightLeft = measureHeight(node.left) + 1;
  heightRight = measureHeight(node.right) + 1;
  height = Math.max(heightLeft, heightRight);
  heightDif = Math.abs(heightLeft - heightRight);
  return heightDif <= 1 ? height : Infinity;
};

const isBalanced = root => {
  return measureHeight(root) !== Infinity ? true : false;
};
