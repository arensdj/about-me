'use strict';

var correctAnswerCounter = 0;
var firstName;

// Question 1
function languageFunc() {
  var answer = prompt('Can I speak French (please enter yes or no)?');
  answer = answer.toLowerCase();

  if(answer === 'y' || answer ==='yes') {
    alert('Incorrect answer.  I do not speak French.');
    console.log('Incorrect answer.  I do not speak French.');
  } else { 
    alert('Correct! I cannot speak French.');
    console.log('Correct!  I cannot speak French.');
   
    correctAnswerCounter++;
  }
} // end languageFunc()

// Question 2
function movieGenreFunc() {
  var answer = prompt('Do I like to watch science fiction movies (please answer yes or no)?');
  answer = answer.toLowerCase();

  if(answer === 'y' || answer === 'yes') {
    alert('Correct!  I love watching science fiction movies.');
    console.log('Correct!  I love watching science fiction movies.');
    
    correctAnswerCounter++;
  } else {
    alert('Incorrect.  I love watching science fiction movies.');
    console.log('Incorrect.  I love watching science fiction movies.');
  }
} // end movieGenreFunc()

// Question 3
function snorkleFunc() {
  var answer = prompt('Have I ever snorkled (please answer yes or no)?');
  answer = answer.toLowerCase();

  if(answer === 'y' || answer === 'yes') {
    alert('Correct!  I have snorkled.');
    console.log('Correct!  I have snorkled.');
    
    correctAnswerCounter++;
  } else {
    alert('Incorrect.  I have snorkled.');
    console.log('Incorrect.  I have snorkled.');
  }
} // end snorkleFunc()

// Question 4
function zipLineFunc() {
  var answer = prompt('Have I gone zip lining (please answer yes or no)?');
  answer = answer.toLowerCase();

  if(answer === 'n' || answer === 'no') {
    alert('Incorrect.  I have zip lined.');
    console.log('Incorrect.  I have zip lined.');
  } else {
    alert('Correct!  I have zip lined.');
    console.log('Correct!  I have zip lined.');
    
    correctAnswerCounter++;
  }
} // end zipLineFunc()

// Question 5
function homeRepairFunc() {
  var answer = prompt('Do I know how to fix a leaky faucet (please enter yes or no)?');
  answer = answer.toLowerCase();

  if(answer === 'y' || answer === 'yes') {
    alert('Incorrect.  I cannot fix a leaky faucet.');
    console.log('Incorrect.  I cannot fix a leaky faucet.');
  } else if (answer === 'n' || answer === 'no') {
    alert('Correct.  I cannot fix a leaky faucet.');
    console.log('Correct.  I cannot fix a leaky faucet.');
    
    correctAnswerCounter++;
  }
} // end homeRepairFunc()

// Question 6
function guessNumberFunc() {
  // This is the number to be guessed.
  var myNumber = 3;
  // This is the number of guesses the user is given.
  var numberOfGuessesLeft = 4;
  // The user's guess
  var numberGuessed = 0;
  
  for(var i = 0; i < 4; i++) {
    numberGuessed = prompt('I\'m thinking of a number between 1 to 10.  Please guess my number.');
    numberGuessed = parseInt(numberGuessed);

    if(numberGuessed === myNumber) {
      alert('You guessed my number!  It was number ' + myNumber);
      correctAnswerCounter++;
      break;
    } else if(numberGuessed > myNumber) {
      numberOfGuessesLeft--;
      alert('Your guess is too high. You have ' + numberOfGuessesLeft + ' guesses left.');
      //continue;
    } else if(numberGuessed < myNumber) {
      numberOfGuessesLeft--;
      alert('Your guess is too low. You have ' + numberOfGuessesLeft + ' guesses left.');
    }
  } 
} // end guessNumberFunc()

// Question 7
function colorFunc() {
  var colorArray = ['orange', 'blue', 'gray', 'red'];
  var numberOfGuessesLeft = 6;
  var guessedColor = false;

  // The user will be given six chances to guess a color in color array.
  while(numberOfGuessesLeft > 0) {
    var answer = prompt('Guess the color of one of my raincoats:');
    answer = answer.toLowerCase();

    for(var i = 0; i < colorArray.length; i++) {
      if(answer === colorArray[i]) {
        alert('Your guess is correct!');
        // Set boolean flag that color was guessed.  Keep track of correct number of guesses by incrementing counter
        guessedColor = true;
        correctAnswerCounter++;
        // User guessed correctly.  Break out of for loop.
        break;
      }
    }

    if(guessedColor) {
      // Guessing a color in array breaks out of the while loop
      break;
    } else {
      //Subtract one from the number of guesses left variable.
      numberOfGuessesLeft--;
      alert('Wrong guess.  You have ' + numberOfGuessesLeft + ' guesses left.');
    }
  }

  // Output the content of color array 
  alert('The colors of my raincoats are: ' + colorArray);
} // end colorFunc()

function displayGameResults() {
  // Output a message for user to know how she did.
  var message;
  if(correctAnswerCounter === 7) {
    message = 'You guessed all correctly!';
  } else if(correctAnswerCounter > 4 && correctAnswerCounter < 7) {
    message = 'That\'s pretty good!';
  } else {
    message = 'Better luck next time.';
  }

  // Output the number of correct guesses.
  alert(firstName + ', thanks for playing.  You got ' + correctAnswerCounter + ' out of 7 questions correct. ' + message);
} // end displayGameResults()

function playGameFunc() {
  var playGame = prompt('Would you like to play my guessing game (please enter yes or no)?');

  // Convert response to all lower case
  playGame = playGame.toLowerCase();

  if(playGame === 'y' || playGame === 'yes') {
    firstName = prompt('Great!  Please enter you name: ');
    console.log('Hooray! The user wants to play my guessing game.');
      
    languageFunc();
    movieGenreFunc();
    snorkleFunc();
    zipLineFunc();
    homeRepairFunc();
    guessNumberFunc();
    colorFunc();

    displayGameResults();
  } else {
    alert('Okay.  Try again next time.');
    console.log('The user does not want to play my guessing game.');
  }
} // end playGameFunc()

playGameFunc();