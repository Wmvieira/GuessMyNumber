let secretNumber = createNumber();
const main = document.querySelector('.main-content');
const tips = document.querySelector('.tips');
const score = document.querySelector('.score');
let scoreValue = 20;
let highscoreValue = 0;
const highscore = document.querySelector('.highscore');
const body = document.querySelector('.body');
const inputGuess = document.querySelector('.try');
const secretNum = document.querySelector('.secret');

document.querySelector('.check').addEventListener('click', function () {
  let guess = inputGuess.value;

  if (guess == secretNumber) {
    correctAws(true);
    secretNum.textContent = guess;
  } else {
    if (guess > secretNumber) {
      tips.textContent = 'Too High🥵';
      wrongAws('High');
    }
    if (guess < secretNumber) {
      tips.textContent = 'Too Low🥶';
      wrongAws('Low');
    }
  }
});

function createNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function correctAws(check) {
  if (!check) {
    body.classList.remove('correct');
    main.classList.remove('correct');
    inputGuess.classList.remove('correct');
    tips.textContent = 'Start Guessing...';
    return;
  }
  body.classList.add('correct');
  main.classList.add('correct');
  inputGuess.classList.add('correct');
  if (highscoreValue < scoreValue) highscoreValue = scoreValue;
  highscore.textContent = `Highscore: ${highscoreValue}`;
  tips.textContent = 'Congratulations 🎆🎉✨';
}

function wrongAws(className) {
  body.classList.add(`wrong${className}`);
  main.classList.add(`wrong${className}`);
  inputGuess.classList.add(`wrong${className}`);
  if (scoreValue > 0) score.textContent = `Score: ${--scoreValue}`;

  setTimeout(function () {
    body.classList.remove(`wrong${className}`);
    main.classList.remove(`wrong${className}`);
    inputGuess.classList.remove(`wrong${className}`);
  }, 1000);
}

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = createNumber();
  correctAws(false);
  scoreValue = 20;
  score.textContent = `Score: ${scoreValue}`;
  secretNum.textContent = '?';
});
