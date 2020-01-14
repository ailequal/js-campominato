// bot generates 16 random numbers between 1 and 100
var botNumbers = arrayGenerator(16, 1, 1000);
console.log(botNumbers);

// how do i prevent the array to have cloned numbers??

// ask user to insert for 84 times a number between 1 and 100

// if number is on the bot list, game over

// the program display the user score


// function
// random number generator between min and max
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// random array generator with selected amount of numbers between min and max
function arrayGenerator(arrayLength, min, max) {
  var arrayNumbers = [];
  for (var i = 0; i < arrayLength; i++) {
    arrayNumbers.push(parseInt(getRndInteger(min, max)));
  }
  arrayNumbers.sort(function(a, b){return a-b});
  return arrayNumbers;
}
