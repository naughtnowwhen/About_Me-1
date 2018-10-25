'use strict';


//Welcome message
var userName = prompt('Hi, welcome to my About Nikki site, what\s your name?');
alert('Welcome to my page ' + userName + '!');
console.log('welcome to my page ' + userName);

var totalAnswer = 0;

//Bulldog question

var bulldogFun = function () {
  var bullDog = prompt('Does Nikki want a French Bulldog?');
  bullDog = bullDog.toLowerCase();
  console.log('Does Nikki want a French Bulldog?' + bullDog);
  if(bullDog === 'yes' || bullDog === 'y') {
    alert('Way to go! I really want a french bulldog!');
    totalAnswer++;
  }

  else if (bullDog === 'no' || bullDog === 'n') {
    alert('Oh no! I love frenchies!');
  } else {
    alert('Please respond using y or n, or yes or no.');
  }
};

bulldogFun();

//Pets Question

var petsFun = function () {
  var pets = prompt('Does Nikki have any pets?');
  pets = pets.toLowerCase();
  console.log('Does Nikki have any pets?' + pets);

  if (pets === 'yes' || pets === 'y') {
    alert('You are correct! She as 2 cats: Waldo and Nala!');
    totalAnswer++;
  }

  else if (pets === 'no' || pets === 'n') {
    alert('You are incorrect, minus 5 points for Slytherin!');
  }

  else {
    pets = prompt('Please respond using y or n, or yes or no.');
  }
};
petsFun();

//Snowman question

var snowmanFun = function(){
  var snowman = prompt('Does Nikki want to build a snowman?');
  snowman = snowman.toLowerCase();
  console.log('Does Nikki want to build a snowman?' + snowman);

  if (snowman === 'yes' || snowman === 'y') {
    alert('I always want to build a snowman!');
    totalAnswer++;
  }


  else if (snowman === 'no' || snowman === 'n') {
    alert('Who doesn\'t want to build a snowman?');
  }

  else {
    alert('Please respond using y or n, or yes or no.');
  }

};
snowmanFun();

//Mangoes question

var mangoesFun = function(){

  var mangoes = prompt('Does Nikki love mangoes?');
  mangoes = mangoes.toLowerCase();
  console.log('Does Nikki love mangoes?' + mangoes);

  if (mangoes === 'yes' || mangoes === 'y') {
    alert('I looooove mangoes!');
    totalAnswer++;
  }

  else if (mangoes === 'NO' || mangoes === 'N') {
    alert('Mangoes are life!');
  }

  else {
    alert('Please respond using y or n, or yes or no.');
  }

};
mangoesFun();

//FairyTail question

var fairyFun = function(){
  var fairyTail = prompt('Is Nikki\'s favorite anime FairyTail?');
  fairyTail = fairyTail.toLowerCase();
  console.log('Is Nikki\'s favorite anime FairyTail?' + fairyTail);

  if (fairyTail === 'yes' || fairyTail === 'y') {
    alert('Who is your favorite character?');
    totalAnswer++;
  }

  else if (fairyTail === 'no' || fairyTail === 'n') {
    alert('You are the weakest link! Goodbye!');
  }
  else {
    alert('Please respond using y or n, or yes or no.');
  }
};
fairyFun();

//Guess number
guessFun = function(){
  var guess= prompt('Can you guess my favorite number? It is between 1-20.');
  var guessCorrect = false;
  var turnsLeft = 4;
  do {
    var number = 16;
    var guesses = parseInt(guess);
    for(var i = 0; i < 4; i++) {
    //   turnsLeft --;
      console.log(turnsLeft, 'this is turns left is it running?');
    }
    if(guesses === number){
      alert('Homerun! You guessed my number!');
      console.log('homerun' + guesses);
      guessCorrect = true;
      totalAnswer ++;
      break;
      console.log(guessCorrect);
    } else if(guesses < number) {
      guess = prompt('Your guess was too low. There are no low riders here so please try again!');
      console.log(turnsLeft);
      turnsLeft --;
      guesses = parseInt(guess);
      console.log('too low' + guess);
    } else if(guesses > number){
      guess = prompt('Whoa! That\'s too high. Guess again.');
      guesses = parseInt(guess);
      console.log('Whoa! That\'s too high.' + number);
    }
  // guessCorrect === false && turnsLeft >0
  } while(guessCorrect === false && turnsLeft >0);
};
guessFun();

//multiple answers

var countryFun = function(){

  var guess = 0;
  var countries = ['germany', 'poland', 'lithuania', 'czech republic', 'japan', 'mexico'];

  while (guess < 6) {
    guess++;
    var answer = prompt('What countries have I lived in?');
    for (var i = 0; i < countries.length; i++) {
      if (answer === countries[i]) {
        alert('You got it correct!');
        totalAnswer++;
        answer = true;
      }
    }
    if (answer === true) {
      break;
    } else if (guess < 6) {
      alert('guess again');
    }
  }
};
countryFun();

//tally prompt
var totalAnswer = prompt('Congratulations, ' + userName + ' you got ' + totalAnswer + ' out of 7 correct!');
console.log(totalAnswer);