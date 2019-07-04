let words = [
  'eleven',
  'will*byers',
  'demogorgon',
  'hopper',
  'jonathan',
  'hawkins',
  'telekinesis',
  'barb',
  'nancy',
  'russians',
  'madmax',
  'upside*down',
  'code*red',
  'blink*once*for*yes',
  'dustin',
  'friends*dont*lie',
  'bob*the*brain',
  'papa'
];
var remainingGuesses;
var guessedLetters;
var wins = 0;
var word;
var activeWord;
var gameReset = true;
var audio = new Audio('audio_file.mp3');

document.onkeyup = function() {
  if (gameReset) {
    document.getElementById('user-win').style.visibility = 'hidden';
    document.getElementById('user-lost').style.visibility = 'hidden';
    resetStats();
    newWord();
    updateStats();
    gameReset = false;
  } else {
    validateUserGuess();
    updateStats();
    gameStatus();
  }
};

function resetStats() {
  audio.play();
  remainingGuesses = 12;
  guessedLetters = [];
  activeWord = [];
  document.getElementById('instructions').style.visibility = 'hidden';
  gameReset = true;
}

function updateStats() {
  document.getElementById('wins').innerText = wins;
  document.getElementById('remainingGuesses').innerText = remainingGuesses;
  document.getElementById('guessedLetters').innerText = guessedLetters
    .join(' ')
    .toUpperCase();
  document.getElementById('word').innerText = activeWord
    .join(' ')
    .toUpperCase();
}

function newWord() {
  word = words[Math.floor(Math.random() * words.length)];
  //console.log(word);
  for (var i = 0; i < word.length; i++) {
    if (word[i] === '*') {
      activeWord.push('-');
    } else {
      activeWord.push(' __ ');
    }
  }
  document.getElementById('word').innerText = activeWord.join(' ');
}

for (var i = 0; i < numBlanks; i++) {
  if (lettersInWord[i] === ' ') {
    blanksAndSuccesses.push('-');
  } else {
    blanksAndSuccesses.push('_');
  }
}

function valAlert(id) {
  var message = document.getElementById(id);
  message.style.visibility = 'visible';
  setTimeout(function() {
    message.style.visibility = 'hidden';
  }, 2000);
}

function validateUserGuess() {
  userGuess = event.key;
  var numberOfGuessedLetters = 0;

  if (!userGuess.match(/^[a-z]$/)) {
    valAlert('invalidLetter');
  } else if (guessedLetters.indexOf(userGuess) >= 0) {
    valAlert('duplicateLetter');
  } else {
    for (var i = 0; i < word.length; i++) {
      if (word.charAt(i) === userGuess) {
        activeWord[i] = userGuess;
        numberOfGuessedLetters++;
      }
    }
    if (numberOfGuessedLetters === 0) {
      --remainingGuesses;
    }
    guessedLetters.push(userGuess);
  }
}

function gameStatus() {
  if (activeWord.indexOf(' __ ') === -1) {
    wins++;
    updateStats();
    document.getElementById('user-win').style.visibility = 'visible';
    gameReset = true;
  } else if (remainingGuesses === 0) {
    updateStats();
    document.getElementById('user-lost').style.visibility = 'visible';
    gameReset = true;
  }
}
