class Dog {
  constructor(name) {
    this.name = name;
  }

  chaseTail(n) {
    if (n > 0) {
      console.log('chasing tail');
      this.chaseTail(n - 1);
    } else console.log('done chasing tail');
  }
}

module.exports = Dog;
