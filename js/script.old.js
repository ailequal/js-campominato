// bot generates x random numbers between a and b
var botNumbers = arrayGenerator(16, 1, 100);
var bridge = document.getElementById('bridge');
for (var i = 0; i < botNumbers.length; i++) {
  bridge.innerHTML += '<li>' + botNumbers[i] + '</li>';
}
console.log(botNumbers);

// how do i prevent the array to have cloned numbers??

// ask user to insert 84 times a number between 1 and 100
var i = 0;
var j = 0;
var userNubers = [];
var score = 0;
var check = true;
var message = "You win";

while (userNubers.length !== 84 && check === true) {
  userNubers.push(parseInt(prompt('Insert a number, beware the mines!!')));
  while ((userNubers[j] !== botNumbers[i]) && (botNumbers[i] !== botNumbers[15])) {
    i++;
  }
  if (userNubers[j] === botNumbers[i]) {
    check = false;
  } else {
    score++;
    i = 0;
    j++;
  }
}

// the program display the user score
var end = result(check, score);


// function
// random number generator between min and max
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// random array generator with selected amount of numbers between min and max
function arrayGenerator(arrayLength, min, max) {
  var i = 0;
  var arrayNumbers = [];
  for (i = 0; i < arrayLength; i++) {
    arrayNumbers.push(parseInt(getRndInteger(min, max)));
  }
  arrayNumbers.sort(function(a, b){return a-b});
  return arrayNumbers;
}

// print final messare and score
function result(win, score) {
  var message = 'You win';
  if (win) {
    console.log(message, 'Your personal score is ' + score);
  } else {
    console.log(message = 'Game over', 'Your personal score is ' + score);
  }
}
