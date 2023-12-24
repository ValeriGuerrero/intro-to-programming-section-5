const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const messages = document.getElementsByClassName('message');
const tooHighMessage = document.getElementById('too-high');
const tooLowMessage = document.getElementById('too-low');
const maxGuessesMessage = document.getElementById('max-guesses');
const numberOfGuessesMessage = document.getElementById('number-of-guesses');
const correctMessage = document.getElementById('correct');
const underHundredMessage = document.getElementById('under-hundreds');

let targetNumber;

//change const to let
let attempts = 0;
let maxNumberOfAttempts = 5;

// Returns a random number from min (inclusive) to max (exclusive)
// Usage:
// > getRandomNumber(1, 50)
// <- 32
// > getRandomNumber(1, 50)
// <- 11
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function checkGuess() {
  // Get value from guess input element
  const guess = parseInt(guessInput.value, 10);
  attempts = attempts + 1;


  hideAllMessages();

  if (guess === targetNumber) {
    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;

    correctMessage.style.display = '';

    submitButton.disabled = true;
    guessInput.disabled = true;
  }

  else if (guess < targetNumber) {
    tooLowMessage.style.display = '';
    tooLowMessage.textContent;
  } else if (guess > Math.max(99)) {
    underHundredMessage.style.display = '';
    underHundredMessage.innerHTML = `Must be less than 100`;
  }
  else {
    tooHighMessage.style.display = '';
    tooHighMessage.textContent;
  }

  let remainingAttempts = maxNumberOfAttempts - attempts;

  if (remainingAttempts === 1) {
    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guess remaining`;
  } else {
    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
  }

  if (remainingAttempts === 0) {
    submitButton.disabled = true;
    guessInput.disabled = true;
  }

}


guessInput.value = '';

resetButton.style.display = '';


function hideAllMessages() {
  for (let elementIndex = 0; elementIndex < messages.length; elementIndex++) {
    messages[elementIndex].style.display = 'none';
  }
}



function setup() {
  // Get random number
  targetNumber = getRandomNumber(1, 100);
  console.log(`target number: ${targetNumber}`);

  // Reset number of attempts
  attempts = 0;

  // Enable the input and submit button
  submitButton.disabled = false;
  guessInput.disabled = false;

  // Reset the input value
  guessInput.value = '';

  hideAllMessages();

  resetButton.style.display = '';

}

submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', setup);

setup();