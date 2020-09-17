const Node = require('./Node');

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (this.length > 0) node.next = this.top;
    this.top = node;
    this.length++;
    return this.size();
  }

  pop() {
    if (this.length === 0) return null;
    let removed = this.top;
    if (this.length === 1) this.top = null;
    else this.top = removed.next;
    this.length--;
    return removed.val;
  }
  size() {
    return this.length;
  }
}

module.exports = Stack;
