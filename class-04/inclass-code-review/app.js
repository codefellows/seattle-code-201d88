'use strict';

let score = 0;
// Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.

// // Indicates through an alert if the guess is “too high”

// alert if “too low”.

// alert if they guess right

let myNum = 30;
// It should give the user exactly four opportunities to get the correct answer.
//Consider using a loop of some sort.
for(let i = 0; i < 4; i++){
  let userGuess = +prompt('Try and guess my number?');
  if(userGuess === myNum){
    alert('You are correct');
    score++;
    break;
    // i = 4;
  } else if(userGuess > myNum){
    alert('Too high');
  } else if(userGuess < myNum){
    alert('Too low');
  }
  if(i === 3){
    alert('The answer was 30');
  }

}

let maxTries = 4;

while(maxTries){
  let userGuess = +prompt('Try and guess my number?');
  if(userGuess === myNum){
    alert('You are correct');
    score++;
    break;
  } else if(userGuess > myNum){
    alert('Too high');
  } else if(userGuess < myNum){
    alert('Too low');
  }
  maxTries--;
  if(maxTries === 0){
    alert('The answer was 30');
  }
}


// After all attempts have been exhausted, tell the user the correct answer.


// Add a 7th question that has multiple correct answers that are stored in an array.
// Give the user 6 attempts to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the correct answers to the user.
// Consider using a loop of some sort for this question.

function questionSeven(){
  let favBoyBands = ['backstreet boys', 'take that', 'bts', 'one direction'];

  for(let i = 0; i < 6; i++){  // slow loop
    let boyBandGuess = prompt('Guess one of my fave boy bands').toLowerCase(); // take that

    for(let j = 0; j < favBoyBands.length; j++){  // fast loop
      if(boyBandGuess === favBoyBands[j]){
        alert('OMG I TOTALLY LOVE THEM!');
        score++;
        i = 6;
        break;
      }

    }
  }
}

questionSeven();


alert(`These were all the possible guesses: ${favBoyBands}`);
alert(`Your score is ${score} out of 1`);
