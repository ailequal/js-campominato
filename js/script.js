// bot generates x random numbers between a and b
var botNumbers = arrayGenerator(16, 1, 100);
console.log(botNumbers);

// how do i prevent the array to have cloned numbers??

// ask user to insert 84 times a number between 1 and 100
var i = 0;
var j = 0;
var userNubers = [];
var check = true;
var message = "Game over";

while (userNubers.length !== 84 && check == true) {
  userNubers.push(parseInt(prompt('Insert a number, beware the mines!!')));
  while (userNubers[j] !== botNumbers[i] && botNumbers[i] !== botNumbers[16]) {
    i++;
  }
  if (userNubers[j] === botNumbers[i]) {
    check = false;
  } else {
    i == 0;
    j++;
  }
}

// if number is on the bot list, game over

// the program display the user score


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
