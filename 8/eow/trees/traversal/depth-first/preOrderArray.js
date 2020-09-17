const preOrderArray = root => {
  if (!root) return [];
  if (root.left === null && root.right === null) return root.val;
  const left = preOrderArray(root.left);
  const right = preOrderArray(root.right);
  return [root.val, ...left, ...right];
};

module.exports = preOrderArray;
