function action() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('uh-oh');
    }, 3000);
  });
}

async function handlePromise() {
  try {
    const res = await action();
    console.log('resolved with', res);
  } catch (err) {
    console.log('rejected because of', err);
  }
}

handlePromise(); // rejected because of uh-oh
