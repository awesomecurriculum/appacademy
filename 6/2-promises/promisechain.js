function task1() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('done with task 1');
      resolve();
    }, 500);
  });
}

function task2() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('done with task 2');
      resolve();
    }, 500);
  });
}

function task3() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('done with task 3');
      resolve();
    }, 500);
  });
}

task1().then(task2).then(task3);

async function doTasks() {
  await task1();
  await task2();
  await task3();
}

doTasks();
