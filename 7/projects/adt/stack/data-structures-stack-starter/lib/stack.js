class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    if (this.length === 0) this.top = node;
    else {
      node.next = this.top;
      this.top = node;
    }
    this.length++;
    return this.length;
  }
  pop() {
    if (this.length === 0) return null;
    let removed = this.top;
    if (this.length === 1) this.top = null;
    else this.top = this.top.next;
    this.length--;
    return removed.value;
  }
  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Stack = Stack;
