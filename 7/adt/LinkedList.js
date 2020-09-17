const Node = require('./Node');

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
    let removed = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    if (this.length > 1) {
      this.head = this.head.next;
    }

    this.length--;
    return removed;
  }

  removeTail() {
    if (this.length === 0) return undefined;

    let removed = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    if (this.length > 1) {
      let cur = this.head;
      do {
        cur = cur.next;
      } while (cur.next !== this.tail);
      cur.next = null;
      this.tail = cur;
    }

    this.length--;
    return removed;
  }

  contains(target) {
    let cur = this.head;

    for (let i = 0; i < this.length; i++) {
      if (cur.value === target) return true;
      cur = cur.next;
    }

    return false;
  }

  get(index) {
    let cur = this.head;

    for (let node = 0; node < this.length; node++) {
      if (node === index) {
        return cur;
      }
      cur = cur.next;
    }

    return null;
  }

  set(index, val) {
    let cur = this.head;

    for (let node = 0; node < this.length; node++) {
      if (node === index) {
        cur.val = val;
        return true;
      }
      cur = cur.next;
    }

    return false;
  }

  insert(index, val) {
    if (index === 0) this.addToHead(val);

    let node = new Node(val);
    let cur = this.head;
    for (let i = 0; i < this.length; i++ - 1) {
      if (i === index - 1) {
        node.next = cur.next;
        cur.next = node;
        this.length++;
        return true;
      }
      cur = cur.next;
    }
    return false;
  }

  remove(index) {
    let cur = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === index - 1) {
        cur.next = cur.next.next;
        this.length--;
        return cur.next;
      }
    }
    return undefined;
  }

  size() {
    return this.length;
  }
}

module.exports = LinkedList;
