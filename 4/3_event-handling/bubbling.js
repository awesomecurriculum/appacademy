window.addEventListener('DOMContentLoaded', e => {
  addDivs(300);
  document.querySelector('.container').addEventListener('click', e => {
    console.log(e.target);
    console.log(e.currentTarget);
  });
});

const addDivs = n => {
  const divContainer = document.createElement('div');
  divContainer.classList.add('container');
  const divs = Array(n)
    .fill(null)
    .map((ele, i) => (ele = i + 1));
  divs.forEach(ele => {
    let cur = document.createElement('div');
    let box = document.createTextNode(ele);
    cur.append(box);
    cur.classList.add('box');
    divContainer.append(cur);
    document.body.append(divContainer);
  });
};
