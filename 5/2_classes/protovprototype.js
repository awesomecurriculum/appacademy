function Dog(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
}

const tag = new Dog('tag', 2, 'golden');

console.log(Object.getPrototypeOf(tag)); // constructor f Dog(name, age, breed)
console.log(tag.__proto__); // constructor f Dog(name, age, breed)
console.log(Dog.prototype); // constructor f Dog(name, age, breed)
console.log(Object.getPrototypeOf(tag) === tag.__proto__ && tag.__proto__ === Dog.prototype); // true
console.log(tag instanceof Dog); // true

console.log(typeof Dog);
console.log(module.exports);

console.log(module);
module.exports = {
  Dog,
  tag,
  bestDogEver: tag,
};

console.log(module);
