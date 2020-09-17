// Write your JS here.
let score = 0;
let whacks = 30;

window.addEventListener('DOMContentLoaded', () => {
  popUpRandomMole();
  let moleHeads = document.querySelectorAll('.wgs__mole-head');
  moleHeads.forEach((mole) => {
    mole.addEventListener('click', () => {
      score += 10;
      mole.classList.add('wgs__mole-head--hidden');
      mole.classList.add('wgs__mole-head--whacked');
      document.querySelector('#score').innerHTML = score;
    });
  })
});

let playingArea = document.querySelector('.wgs');

window.addEventListener('click', () => {
  whacks--;
  document.querySelector('#whacks').innerHTML = whacks;
});


  // setInterval(() => {
  //   const moleHeads = document.querySelectorAll('.wgs__mole-head');
  //   for (let moleHead of moleHeads) {
  //     moleHead.classList.toggle('wgs__mole-head--hidden');
  //   }
  // }, 1000);

function popUpRandomMole() {
  let moleHeads = document.querySelectorAll('.wgs__mole-head:not(.wgs__mole-head--whacked)');
  if(!moleHeads.length || whacks === 0) {
    let winDiv = document.querySelector('#gameOver');
    winDiv.classList.add('youWin');
    winDiv.innerHTML = `GAME OVER    SCORE: ${score}`;
    let newGameButton = document.createElement('button');
    newGameButton.innerHTML = 'New Game';
    winDiv.appendChild(newGameButton);
    newGameButton.addEventListener('click', () => {
      winDiv.removeChild(winDiv.firstChild);
      winDiv.removeChild(winDiv.firstChild);
      winDiv.classList.remove('youWin');
      let moles = document.querySelectorAll('.wgs__mole-head');
      moles.forEach(mole => {
        mole.classList.remove('wgs__mole-head--whacked');
      });
      whacks = 30;
      score = 0;
      popUpRandomMole();
    });
    return;
  }

  let index = Math.floor(Math.random() * (moleHeads.length));
  let mrMole = moleHeads[index];
  let count = 8 - moleHeads.length
  mrMole.classList.remove('wgs__mole-head--hidden');
  setTimeout(hideMole, 3000 / (count + 1), mrMole);
}


function hideMole(mrMole) {
  mrMole.classList.add('wgs__mole-head--hidden');
  setTimeout(popUpRandomMole, 300)
}
