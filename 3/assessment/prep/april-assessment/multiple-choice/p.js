console.log(sayHello("Jeff"));

function sayHello(name) {
  return `Hello ${name}`;
}

let goodbye;
console.log(goodbye); // ???

if ("false") {
  console.log("Hello!");
} else if ([]) {
  console.log("Goodbye!");
} else if ("") {
  console.log("Have a nice day!");
} else {
  console.log("party time is over");
}
