// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('../TreeNode.js');

const buildTree = (preOrder, inOrder) => {
  if (!preOrder.length) return null;
  const rootVal = preOrder.shift();
  const root = new TreeNode(rootVal);
  if (!preOrder.length) return root;

  const rootIndex = inOrder.indexOf(root.val);
  const leftInOrder = inOrder.slice(0, rootIndex);
  const rightInOrder = inOrder.slice(rootIndex + 1);
  const leftPreOrder = preOrder.filter(ele => leftInOrder.includes(ele));
  const rightPreOrder = preOrder.filter(ele => rightInOrder.includes(ele));

  root.left = buildTree(leftPreOrder, leftInOrder);
  root.right = buildTree(rightPreOrder, rightInOrder);

  return root;
};
