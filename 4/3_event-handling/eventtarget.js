window.addEventListener('DOMContentLoaded', e => {
  document
    .getElementById('event-target')
    .querySelectorAll('.box')
    .forEach((ele, i) => {
      ele.setAttribute('id', `div-${i + 1}`);
      ele.innerHTML = `${i + 1}`;
    });

  document.body.addEventListener('click', e => {
    console.log(`body was clicked`);
    console.log(`event.target: ${event.target}`);
    console.log(`target's id: ${event.target.id}`);
    console.log(`current.target: ${event.currentTarget}`);
  });
});
