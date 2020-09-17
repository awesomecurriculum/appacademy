window.addEventListener('DOMContentLoaded', e => {
  const liArr = [];
  for (let i = 0; i < 6; i++) {
    liArr.push(`<li> ${somefunction()} </li>`);
  }
  const liStr = liArr.join('');
  const listEle = document.getElementById('someid');
  listEle.innerHTML = liStr;
});
