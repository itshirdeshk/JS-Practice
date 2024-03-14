# Projects related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

```javascript
const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // console.log(e.target);
    body.style.backgroundColor = e.target.id;
  });
});
``` 

## Project 2

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height))
    result.innerHTML = "Please give a valid height...";

  else if(weight === '' || weight < 0 || isNaN(weight))
    result.innerHTML = "Please give a valid weight...";

  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if(bmi < 18.6)
      result.innerHTML = `<span>${bmi}</span><br><span>Under Weight</span>`;
    if(bmi >= 18.6 && bmi < 24.9)
      result.innerHTML = `<span>${bmi}</span><br><span>Normal Range</span>`;
    if(bmi > 24.9)
      result.innerHTML = `<span>${bmi}</span><br><span>Over Weight</span>`;
  }    
})
```

## Project 3

```javascript
const clock = document.getElementById('clock');

setInterval(() => {
  let date = new Date;
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```  

## Project 4

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over, random number was ${randomNumber}`);
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You guesssed it right...');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Number is too low...');
  } else {
    displayMessage('Number is too high...');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
  })
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');

  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  
  startOver.appendChild(p);
  playGame = false;
  newGame()
}
```

## Project 5
```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>

      <table>
        <tr>
          <th>Key</th>
          <th>Keycode</th>
          <th>Code</th>
        </tr>
        <tr>
          <td<${e.key === ' ' ? "Space" : e.key}/td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </table>

    </div>
  `;
});
```

## Project 6
```javascript
// Generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
};

let interval;

const startChangingColor = function () {
  if (!interval) {
    interval = setInterval(() => {
      // let color = randomColor();
      document.body.style.backgroundColor = `${randomColor()}`;
    }, 1000);
  }
};

const stopChangingColor = function () {
  clearInterval(interval);
  interval = null;
};

document.getElementById('start').addEventListener('click', startChangingColor);

document.getElementById('stop').addEventListener('click', stopChangingColor);
```