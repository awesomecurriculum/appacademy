window.addEventListener('DOMContentLoaded', e => {
  const list = document.getElementById('your-worst-enemy');

  const items = [null, null, null, null, null, null];

  const randomNums = items.map(ele => (ele = `<li>${Math.floor(Math.random() * 100)}</li>`));

  const stringified = randomNums.join('\n');
  list.innerHTML = stringified;
});
