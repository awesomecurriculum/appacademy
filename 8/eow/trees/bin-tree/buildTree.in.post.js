// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/

const { TreeNode } = require('../TreeNode.js');

const buildTree = (inOrder, postOrder) => {
  if (!postOrder.length) return null;
  const rootVal = postOrder.pop();
  const root = new TreeNode(rootVal);
  if (inOrder.length === 1) return root;

  const rootIndex = inOrder.indexOf(root.val);
  const leftInOrder = inOrder.slice(0, rootIndex);
  const rightInOrder = inOrder.slice(rootIndex + 1);
  const leftPostOrder = postOrder.filter(ele => leftInOrder.includes(ele));
  const rightPostOrder = postOrder.filter(ele => rightInOrder.includes(ele));

  root.left = buildTree(leftInOrder, leftPostOrder);
  root.right = buildTree(rightInOrder, rightPostOrder);

  return root;
};

// tree: [1, 2, 3, 4, 5, 6, 7]
// root: 1
// pre: [1, 2, 4, 5, 3, 6, 7]
// in: [4, 2, 5, 1, 6, 3, 7]
// post: [4, 5, 2, 6, 7, 3, 1]
