function walkTag() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('walked!');
    }, 1000);
  });
}

async function feedTag() {
  console.log('before going on a walk with Tag');
  const res = await walkTag();
  console.log(res);
  console.log('fed!');
}

feedTag();
