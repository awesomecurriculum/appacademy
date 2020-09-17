const { TreeNode } = require('../TreeNode.js');

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    if (!this.root) return (this.root = new TreeNode(val));

    let curNode = this.root;

    while ((val < curNode.val && curNode.left) || (val > curNode.val && curNode.right)) {
      if (val < curNode.val) curNode = curNode.left;
      else curNode = curNode.right;
    }
    if (val < curNode.val) curNode.left = new TreeNode(val);
    else curNode.right = new TreeNode(val);
  }

  searchRecur(val, curNode = this.root) {
    if (!curNode) return false;
    if (val < curNode.val) return this.searchRecur(val, curNode.left);
    if (val > curNode.val) return this.searchRecur(val, curNode.right);
    else return true;
  }

  searchIter(val, curNode = this.root) {
    if (!curNode) return false;

    while ((val < curNode.val && curNode.left) || (val > curNode.val && curNode.right)) {
      if (val < curNode.val) curNode = curNode.left;
      else curNode = curNode.right;
    }
    return val === curNode.val;
  }
}

module.exports = { BST };
