window.addEventListener('DOMContentLoaded', e => {
  const stopCyanMadness = _ => {
    const inputVal = document.getElementById('stopper').value;

    if (inputVal !== 'STOP') {
      document.body.style.backgroundColor = 'cyan';
    }
  };

  setTimeout(stopCyanMadness, 5000);
});
