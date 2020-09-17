function task1() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('done with task 1');
      resolve('task 1');
    }, 1000);
  });
}

function task2() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('done with task 2');
      resolve('task 2');
    }, 2000);
  });
}

function task3() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('done with task 3');
      resolve('task 3');
    }, 500);
  });
}

// task1().then(task2).then(task3);

/* done with task 1
done with task 2
done with task 3 */

// Promise.all([task1(), task2(), task3()]).then(() => console.log('done with all tasks'));

/* done with task 3
done with task 1
done with task 2
done with all tasks
*/

const promises = [task1(), task2(), task3()];
const promises2D = promises.map((task, n) => [`task-${n}`, task]);
const map = new Map(promises2D);

// const set = new Set(promises);

// Promise.all(promises).then(res => console.log(res, set));
//Promise.all(set).then(res => console.log(res, set));

Promise.all(map).then(res => console.log(res));
