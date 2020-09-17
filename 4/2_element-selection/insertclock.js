window.addEventListener('DOMContentLoaded', e => {
  const title = document.getElementById('someid');
  const getTime = _ => {
    const date = new Date();
    const s = date.getSeconds();
    const m = date.getMinutes();
    const h = date.getHours();

    title.innerHTML = h + ':' + m + ':' + s;
  };

  setInterval(getTime, 1000);
});
