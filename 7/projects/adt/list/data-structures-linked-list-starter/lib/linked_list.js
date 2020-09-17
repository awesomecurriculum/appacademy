class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    let node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  addToTail(val) {
    let node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  removeHead() {
    if (this.length === 0) return undefined;
    let removed;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      removed = this.head;
      this.head = this.head.next;
    }
    this.length--;
    return removed;
  }

  removeTail() {
    if (this.length === 0) return undefined;
    let removed;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let cur = this.head;
      while (cur.next !== this.tail) cur = cur.next;
      removed = cur.next;
      cur.next = null;
      this.tail = cur;
    }
    this.length--;
    return removed;
  }

  insert(i, val) {
    if (i > this.length) return false;
    if (i === 0) return this.addToHead(val);
    let node = new Node(val);
    let cur = this.head;
    while (i > 1) {
      cur = cur.next;
      i--;
    }
    node.next = cur.next;
    cur.next = node;
    this.length++;
    return true;
  }

  remove(i) {
    if (i > this.length - 1) return undefined;
    if (i === 0) return this.removeHead();
    let cur = this.head;
    let j = 0;
    while (i > 1 && j < this.length) {
      cur = cur.next;
      i--;
      j++;
    }
    let removed = cur.next;
    cur.next = cur.next.next;
    this.length--;
    return removed;
  }

  contains(target) {
    if (this.length === 0) return false;
    let cur = this.head;
    for (let i = 0; i < this.length; i++) {
      if (cur.value === target) return true;
      cur = cur.next;
    }
    return false;
  }

  get(i) {
    if (i > this.length - 1) return null;
    let cur = this.head;
    while (i > 0) {
      cur = cur.next;
      i--;
    }
    return cur;
  }

  set(i, val) {
    if (i > this.length - 1) return false;
    let cur = this.head;
    while (i > 0) {
      cur = cur.next;
      i--;
    }
    cur.value = val;
    return true;
  }

  size() {
    return this.length;
  }
}

let ll = new LinkedList().addToHead(4);
ll.addToTail(3);
ll.addToTail(2);

ll.contains(4);

exports.Node = Node;
exports.LinkedList = LinkedList;
