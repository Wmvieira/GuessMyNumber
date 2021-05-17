let secretNumber = createNumber();
const main = document.querySelector('.main-content');
const tips = document.querySelector('.tips');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const body = document.querySelector('.body');
const inputGuess = document.querySelector('.try');
const secretNum = document.querySelector('.secret');

document.querySelector('.check').addEventListener('click', function () {
  let guess = inputGuess.value;

  if (guess == secretNumber) {
    correctAws();
    tips.textContent = 'Congratulations 🎆🎉✨';
    secretNum.textContent = guess;
  } else {
    wrongAws();
    if (guess > secretNumber) tips.textContent = 'Too High🥵';
    if (guess < secretNumber) tips.textContent = 'Too Low🥶';
  }
});

function createNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function correctAws() {
  body.classList.add('correct');
  main.classList.add('correct');
  inputGuess.classList.add('correct');
}

function wrongAws() {
  body.classList.add('wrong');
  main.classList.add('wrong');
  inputGuess.classList.add('wrong');
  setTimeout(function () {
    body.classList.remove('wrong');
    main.classList.remove('wrong');
    inputGuess.classList.remove('wrong');
  }, 1000);
}
