function wrapper() {
  promise1
    .then(res1 => {
      console.log(res1);
      return promise2;
    })
    .then(res2 => {
      console.log(res2);
      return promise3;
    })
    .then(res3 => {
      console.log(res3);
    });
}

async function wrap() {
  console.log(await promise1);
  console.log(await promise2);
  console.log(await promise3);
  console.log(await promise4);
}
