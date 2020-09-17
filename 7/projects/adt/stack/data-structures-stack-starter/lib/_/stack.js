// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
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

// class Stack {
//   constructor() {
//     this.top = null;
//     this.length = 0;
//   }
//   push(val) {
//     let newNode = new Node(val);
//     //empty stack
//     if (this.length === 0) {
//       this.top = newNode;
//     }
//     //non-empty stack
//     else {
//       newNode.next = this.top;
//       this.top = newNode;
//     }
//     this.length++;
//     return this.length;
//   }
//   pop() {
//     //stack is empty
//     if (this.length === 0) {
//       return null;
//     }
//     //stack is 1
//     if (this.length === 1) {
//       let removedNode = this.top;
//       this.top = null;
//       this.length--;
//       return removedNode.value;
//     }
//     //stack is >1
//     else {
//       let removedNode = this.top;
//       this.top = removedNode.next;
//       this.length--;
//       return removedNode.value;
//     }
//   }
//   size() {
//     return this.length;
//   }
// }

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
    return removed.value;
  }
  size() {
    return this.length;
  }
}
exports.Node = Node;
exports.Stack = Stack;
