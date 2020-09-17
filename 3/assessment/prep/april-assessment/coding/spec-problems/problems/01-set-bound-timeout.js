/***********************************************************************
Write a function `boundTimeout` that accepts a callback, a delay in
milliseconds, and an object. The function should bind the callback to
the given object and set a timeout with the given delay using that
bound callback.

Examples:

function bark() {
  console.log(this.name + ' barks');
}

function meow() {
  console.log(this.name + ' meowsss');
}

const dog = { name: 'Fido', colour: 'brown'};
const cat = { name: 'Sennacy', colour: 'black'};

boundTimeout(bark, 500, dog); // prints 'Fido barks' after 500 ms
boundTimeout(bark, 500, cat); // prints 'Sennacy barks' after 500 ms
boundTimeout(meow, 500, dog); // prints 'Fido meowsss' after 500 ms
boundTimeout(meow, 500, cat); // prints 'Sennacy meowsss' after 500 ms
***********************************************************************/

const boundTimeout = (cb, del, obj) => {
  const bound = cb.bind(obj);
  setTimeout(bound, del);
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = boundTimeout;
} catch {
  module.exports = null;
}
