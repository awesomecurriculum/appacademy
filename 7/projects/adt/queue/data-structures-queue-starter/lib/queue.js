class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }
  enqueue(val) {
    let node = new Node(val);
    if (this.length === 0) {
      this.front = node;
      this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }
    this.length++;
    return this.length;
  }
  dequeue() {
    if (this.length === 0) return null;
    let removed = this.front;
    if (this.length === 1) {
      this.front = null;
      this.back = null;
    } else {
      this.front = this.front.next;
    }
    this.length--;
    return removed.value;
  }
  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Queue = Queue;
