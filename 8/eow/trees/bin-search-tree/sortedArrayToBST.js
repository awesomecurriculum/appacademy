//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const sortedArrayToBST = nums => {
  if (!nums.length) return null;
  if (nums.length === 1) return new TreeNode(nums[0]);

  let rootIdx = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[rootIdx]);
  root.left = sortedArrayToBST(nums.slice(0, rootIdx));
  root.right = sortedArrayToBST(nums.slice(rootIdx + 1));

  return root;
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
/*
      0
     / \
   -3   9
   /   /
 -10  5
 */
