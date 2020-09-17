const inOrderArray = root => {
  if (!root) return [];
  if (root.left === null && root.right === null) return root.val;
  const left = inOrderArray(root.left);
  const right = inOrderArray(root.right);
  return [...left, root.val, ...right];
};

module.exports = inOrderArray;
