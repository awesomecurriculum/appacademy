function Dog(name, age, breed) {
  if (!(this instanceof Dog)) {
    throw new Error('Dog needs to be called with the `new` keyword');
  }

  this.name = name;
  this.age = age;
  this.breed = breed;
}
