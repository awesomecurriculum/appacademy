const postOrderArray = root => {
  if (!root) return [];
  if (root.left === null && root.right === null) return root.val;
  const left = postOrderArray(root.left);
  const right = postOrderArray(root.right);
  return [...left, ...right, root.val];
};

module.exports = postOrderArray;
