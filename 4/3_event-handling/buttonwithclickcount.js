window.addEventListener('DOMContentLoaded', e => {
  const button = document.getElementById('increment-count');
  let counter = document.getElementById('clicked-count');
  let count = 0;

  button.addEventListener('click', e => {
    count++;
    counter.innerHTML = count;
  });
});
