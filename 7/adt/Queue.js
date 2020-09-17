const Node = require('./Node');

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }
  enqueue(val) {
    let node = new Node(val);
    if (this.length === 0) this.front = node;
    else this.back.next = node;
    this.back = node;
    this.length++;
    return this.length;
  }
  dequeue() {
    if (this.length === 0) return null;
    let removed = this.front;
    if (this.length === 1) {
      this.front = null;
      this.back = null;
    }
    if (this.length > 1) this.front = this.front.next;
    this.length--;
    return removed.val;
  }
  size() {
    return this.length;
  }
}

module.exports = Queue;
