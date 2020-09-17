window.onload = () => {
  const checkbox = document.getElementById('on-off');
  const divShowHide = document.getElementById('now-you-see-me');
  checkbox.addEventListener('click', e => {
    if (checkbox.checked) {
      divShowHide.classList.remove('hide');
      divShowHide.classList.add('show');
      // divShowHide.style.display = 'block';
    } else {
      divShowHide.classList.remove('show');
      divShowHide.classList.add('hide');
      // divShowHide.style.display = 'none';
    }
  });
};
