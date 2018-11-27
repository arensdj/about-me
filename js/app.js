'use strict';

var playGame = prompt('Would you like to play my guessing game (please enter y or n)?');

var answer;
//var correctGuess = false;

alert('User entered: ' + playGame);

playGame.toUpperCase();

if(playGame === 'y' || playGame === 'yes' || playGame === 'YES') {
  alert('Great! Here we go');
  console.log('Hooray! The user is going to play my guessing game.');
  
  answer = prompt('Can I speak French (please enter y or n)?');
  answer.toLowerCase();

  if(answer === 'n' || answer ==='no' || answer === 'NO') {
    //correctGuess = true;
    alert('The user guessed "' + answer + '" that I can speak French.  You are correct!');
    console.log('The user guessed "' + answer + '" I can speak French.  You are correct!');
  } else {
    alert('The user guessed "' + answer + '" that I can speak French.  Oops wrong answer.');
    console.log('the user guessed "' + answer + '" that I can speak French.  Oops wrong answer');
  }




} else {
  alert('Okay.  Try again next time.');
  console.log('Oh well.  The user does not want to play my guessing game.');
}

