// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

// class Queue {
//   constructor() {
//     this.front = null;
//     this.back = null;
//     this.length = 0;
//   }
//   enqueue(val) {
//     let newNode = new Node(val);
//     //add to empty queue
//     if (this.length === 0) {
//       this.front = newNode;
//       this.back = newNode;
//       this.length++;
//     }
//     else {
//       this.back.next = newNode;
//       this.back = newNode;
//       this.back.next = null;
//       this.length++;
//     }
//     return this.length;
//   }
//   dequeue() {
//     let removedNode = this.front;
//     if (this.length === 0) {
//       return null;
//     }
//     if (this.length === 1) {
//       this.front = null;
//       this.back = null;
//       this.length--;
//       return removedNode.value;
//     }
//     let next = this.front.next;
//     this.front = next;
//     this.length--;
//     return removedNode.value;
//   }
//   size() {
//     return this.length;
//   }
// }

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
    return removed.value;
  }
  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Queue = Queue;
