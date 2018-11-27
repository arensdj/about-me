'use strict';

var playGame = prompt('Would you like to play my guessing game (please enter yes or no)?');

var answer;
//var correctGuess = false;

alert('User entered: ' + playGame);

playGame.toUpperCase();

if(playGame === 'y' || playGame === 'yes' || playGame === 'YES') {
  alert('Great! Here we go');
  console.log('Hooray! The user answered "' + playGame + '" and will play my guessing game.');
  
  answer = prompt('Can I speak French (please enter yes or no)?');
  answer.toLowerCase();

  if(answer === 'y' || answer ==='yes' || answer === 'YES') {
    //correctGuess = true;
    alert('The user guessed "' + answer + '" that I can speak French.  Oops wrong answer.');
    console.log('The user guessed "' + answer + '" that I can speak French.  Oops wrong answer.');
  } else { // User answered either no, n or N
    alert('The user guessed "' + answer + '" that I cannot speak French.  You are correct!');
    console.log('The user guessed "' + answer + '" I cannot speak French.  You are correct!');
  }
  
  // if(answer === 'n' || answer ==='no' || answer === 'NO') {
  //   //correctGuess = true;
  //   alert('The user guessed "' + answer + '" that I can speak French.  You are correct!');
  //   console.log('The user guessed "' + answer + '" I can speak French.  You are correct!');
  // } else {
  //   alert('The user guessed "' + answer + '" that I can speak French.  Oops wrong answer.');
  //   console.log('the user guessed "' + answer + '" that I can speak French.  Oops wrong answer');
  // }

  answer = prompt('Do I like to watch science fiction movies (please answer yes or no)?');
  answer.toLowerCase();

  if(answer === 'y' || answer === 'yes' || answer === 'YES') {
    alert('The user guessed "' + answer + '" that I watch science fiction.  Correct!  I love science fiction flicks.');
    console.log('The user guessed "' + answer + '" that I watch science fiction movies.  Correct!');
  } else {
    alert('The user guessed "' + answer + '" that I don\'t watch science fiction.  Oops wrong answer. I\'m a science fiction junky.');
    console.log('The user guessed "' + answer + '" that I don\'t watch science fiction movies.  Oops wrong answer.  I\'m a science fiction junky.');
  }


} else {
  alert('Okay.  Try again next time.');
  console.log('Oh well.  The user does not want to play my guessing game.');
}

