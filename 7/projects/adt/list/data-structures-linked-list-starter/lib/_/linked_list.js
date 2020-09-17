// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // TODO: Implement the addToTail method here
  addToTail(val) {
    let newNode = new Node(val);
    //if list is empty
    if (this.length === 0) {
      this.tail = newNode;
      this.head = newNode;
    }
    //if list has node
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // TODO: Implement the removeTail method here
  removeTail() {
    //no nodes
    if (this.length === 0) {
      return undefined;
    }
    //one node
    let removedNode;
    if (this.length === 1) {
      removedNode = this.tail;
      this.tail = null;
      this.head = null;
    } else {
      removedNode = this.tail;
      let currNode = this.head;
      while (currNode.next != this.tail) {
        currNode = currNode.next;
      }
      this.tail = currNode;
      this.tail.next = null;
    }

    //more than one node
    this.length--;
    return removedNode;
  }

  // TODO: Implement the addToHead method here
  addToHead(val) {
    let newNode = new Node(val);
    //empty list
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    //is stuff in list
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // TODO: Implement the removeHead method here
  removeHead() {
    let removedNode = this.head;
    //empty list
    if (this.length === 0) {
      return undefined;
    }
    //one list
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    //more than one
    else {
      let nextHead = this.head.next;
      this.head = nextHead;
    }
    this.length--;
    return removedNode;
  }

  // TODO: Implement the contains method here
  contains(target) {
    let currentNode = this.head;
    for (let i = 0; i < this.length; ++i) {
      if (currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  }

  // TODO: Implement the get method here
  get(index) {
    let currentNode = this.head;
    for (let i = 0; i < this.length; ++i) {
      if (i === index) {
        return currentNode;
      } else {
        currentNode = currentNode.next;
      }
    }
    return null;
  }

  // TODO: Implement the set method here
  set(index, val) {
    let currentNode = this.head;
    for (let i = 0; i < this.length; ++i) {
      if (i === index) {
        currentNode.value = val;
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  }

  // TODO: Implement the insert method here
  insert(index, val) {
    if (index === 0) {
      this.addToHead(val);
    }
    let newNode = new Node(val);
    let currentNode = this.head;
    for (let i = 0; i < this.length; ++i) {
      if (i === index - 1) {
        let currentNext = currentNode.next;
        currentNode.next = newNode;
        newNode.next = currentNext;
        this.length++;
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }

    return false;
  }

  // TODO: Implement the remove method here
  remove(index) {
    let currentNode = this.head;
    for (let i = 0; i < this.length; ++i) {
      if (i === index - 1) {
        let newNext = currentNode.next.next;
        let removedNode = currentNode.next;
        currentNode.next = newNext;
        this.length--;
        return removedNode;
      } else {
        currentNode = currentNode.next;
      }
    }
    return undefined;
  }

  // TODO: Implement the size method here
  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
