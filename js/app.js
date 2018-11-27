'use strict';

var playGame = prompt('Would you like to play my guessing game (please enter yes or no)?');

var answer;

alert('User entered: ' + playGame);

// Convert response to lower case
playGame = playGame.toLowerCase();

if(playGame === 'y' || playGame === 'yes') {
  alert('Great! Here we go');
  console.log('Hooray! The user answered "' + playGame + '" and will play my guessing game.');
  
  answer = prompt('Can I speak French (please enter yes or no)?');
  answer = answer.toLowerCase();

  if(answer === 'y' || answer ==='yes') {

    alert('The user guessed "' + answer + '" that I can speak French.  Oops wrong answer.');
    console.log('The user guessed "' + answer + '" that I can speak French.  Oops wrong answer.');
  } else { // User answered either no, n or N
    alert('The user guessed "' + answer + '" that I cannot speak French.  You are correct!');
    console.log('The user guessed "' + answer + '" I cannot speak French.  You are correct!');
  }

  answer = prompt('Do I like to watch science fiction movies (please answer yes or no)?');
  answer = answer.toLowerCase();

  if(answer === 'y' || answer === 'yes' || answer === 'YES') {
    alert('The user guessed "' + answer + '" that I watch science fiction.  Correct!  I love science fiction flicks.');
    console.log('The user guessed "' + answer + '" that I watch science fiction movies.  Correct!');
  } else {
    alert('The user guessed "' + answer + '" that I don\'t watch science fiction.  Oops wrong answer. I\'m a science fiction junky.');
    console.log('The user guessed "' + answer + '" that I don\'t watch science fiction movies.  Oops wrong answer.  I\'m a science fiction junky.');
  }

  answer = prompt('Have I ever snorkled (please answer yes or no)?');
  answer = answer.toLowerCase();

  if(answer === 'y' || answer === 'yes') {
    alert('The user guessed "' + answer + '" that I have snorkled.  Correct!');
    console.log('The user guessed "' + answer + '" that I have snorked.  Correct!');
  } else {
    alert('The user guessed "' + answer + '" that I have not snorkled.  Oops wrong answer.');
    console.log('The user guessed "' + answer + '" that I have not snorkled.  Oops wrong answer.');
  }

  answer = prompt('Have I gone zip lining (please answer yes or no)?');
  answer = answer.toLowerCase();

  if(answer === 'n' || answer === 'no') {
    alert('The user guessed "' + answer + '" I have not zip lined.  Wrong answer.  I love to zip line.');
    console.log('The user guessed "' + answer + '" I have not zip lined.  Wrong answer.  I love to zip line.');
  } else {
    alert('The user guessed correctly.  I have zip lined.  It was a blast!');
    console.log('The user guessed correctly.  I have zip lined.  It was a blast!');
  }
  
  alert('Thanks for playing my guessing game.');

} else {
  alert('Okay.  Try again next time.');
  console.log('Oh well.  The user does not want to play my guessing game.');
}

