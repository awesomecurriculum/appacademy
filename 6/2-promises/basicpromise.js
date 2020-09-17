const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('the promise has fulfilled');
  }, 1000);
});

// console.log(myPromise); // Promise { <pending> }

//myPromise.then(result => console.log(result)); // the promise has fulfilled

// .catch is best practice unless you want to throw a specific error for a specific step
myPromise
  .then(
    helloWorld => {
      console.log('promise.then', helloWorld);
      return 'return of first then';
    },
    rejectedError => {
      console.log('promise.then', rejectedError);
    }
  )
  .then(returnOfFirstThen => {
    console.log(returnOfFirstThen);
    return new Promise((resolve, reject) => {
      reject('second then error');
    });
  })
  .catch(error => console.log('catch', error));

myPromise.then(result => console.log('resolved', result)).catch(reason => console.log('rejected', reason));

myPromise
  .then(result => console.log('resolved 1', result))
  .then(result => console.log('resolved 2', result))
  .catch(reason => console.log('rejected', reason));
