const map = new Map();

class ArrayMap {
  constructor() {
    this.keys = [];
    this.values = [];
  }

  set(key, value) {
    const i = this.keys.indexOf(key);
    if (i > -1) {
      this.values[i] = value;
      return this.values[i];
    } else {
      this.keys.push(key);
      this.values.push(value);
    }
  }
  get(key) {
    const i = this.keys.indexOf(key);
    if (i >= 0) {
      return this.values[i];
    }
  }

  delete(key) {
    const i = this.keys.indexOf(key);
    if (i >= 0) {
      this.keys.splice(i, 1);
      this.values.splice(i, 1);
    }
  }
}

class TupleMap {
  constructor() {
    this.data = [];
  }
}
