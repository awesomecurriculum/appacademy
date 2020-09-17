// unordered, but need to be able to determine if a key exists

const set = new Set();

class ArraySet {
  constructor() {
    this.data = [];
  }

  add(o) {
    if (!this.data.includes(o)) {
      this.data.push(o);
    }
  }

  remove(o) {
    const i = this.data.indexOf(o);
    if (i >= 0) {
      this.data.splice(i, 1);
    }
  }

  has(o) {
    return this.data.includes(o);
  }
}
