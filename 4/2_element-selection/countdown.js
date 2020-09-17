window.addEventListener('DOMContentLoaded', e => {
  const countdown = () => {
    let end = new Date(2020, 6, 3).getTime();
    let now = new Date().getTime();
    let timeLeft = end - now;
    let d = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let h = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((timeLeft % (1000 * 60)) / 1000);
    document.querySelector('title').innerHTML = `${d}:${h}:${m}:${s}`;
  };

  setInterval(countdown, 1000);
});
