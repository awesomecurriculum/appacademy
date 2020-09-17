function grindTheBeans() {
  setTimeout(() => console.log('step 1. done grinding beans'), 1000);
}

grindTheBeans();
console.log('step 2. done');

// Callback Craziness
task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {});
    });
  });
});

// Promise Paradise
task1().then(task2).then(task3).then(task4);
