// var
var i = 0;
var level = '';
var minNumber = 1;
var maxNumber = 100;
var attempt = 84;
var arrayBomb = [];
var numberBomb = 0;
var arrayUser = [];
var numberUser = 0;
var score = 0;

// ask for which level to play
// level 0 > 1 to 100 with 84 times
// level 1 > 1 to 80 with 64 times
// level 2 > 1 to 50 with 34 times
// level 9 > 1 to 20 with 5 times, only for debug

do {
  level = parseInt(prompt('Select a level difficulty: 0 or 1 or 2'));
  if (level === 0) {
    // use default values
  } else if (level === 1) {
    maxNumber = 80;
    attempt = 64;
  } else if (level === 2) {
    maxNumber = 50;
    attempt = 34;
  } else if (level === 9) {
    maxNumber = 50;
    attempt = 5;
  }

} while (level !== 0 && level !== 1 && level !== 2 && level !== 9);
console.log('level set to', level);
console.log('minNumber set to', minNumber);
console.log('maxNumber set to', maxNumber);
console.log('attempt set to', attempt);

// generate 16 random numbers from minNumber to maxNumber, all different, and store them in an array
for (i = 0; arrayBomb.length < 16; i++) {
  numberBomb = getRandomNumber(minNumber, maxNumber);
  if (arrayScan(arrayBomb, numberBomb) === false) {
    arrayBomb.push(numberBomb);
  }
}
arrayBomb.sort(function(a, b){return a-b});
console.log('The bombs are here');
console.log(arrayBomb);

// ask user n attempt times to insert a number between  and maxNumber
i = 0;
while (i < attempt && arrayScan(arrayBomb, numberUser) === false) {
  // ask numberUser and push it inside arrayUser
  // check isBetween minNumber and maxNumber and that isn't inside arrayUser
  do {
    numberUser = parseInt(prompt('Insert a number between ' + minNumber + ' and ' + maxNumber));
  } while (isBetween(minNumber, maxNumber, numberUser) === false || arrayScan(arrayUser, numberUser));
  // only push inside the array if is not a numberBomb
  if (arrayScan(arrayBomb, numberUser) === false) {
    arrayUser.push(numberUser);
    score++;
  }
  i++;
}
console.log('These are the user choices');
console.log(arrayUser);

// display final score
console.log('Your final score is', score);


// function
// generate random number between min and max, both incluced
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// scan an array and check if a specific item is stored inside
function arrayScan(array, item) {
  var i = 0;
  var check = false;
  while (i < array.length && check === false) {
    if (array[i] === item) {
      check = true;
      return check;
    } else {
      check = false;
    }
    i++;
  }
  return check;
}

// scan if a var int is between two selected values, both included
function isBetween(min, max, item) {
  var check = false;
  if (item >= min && item <= max) {
    check = true;
    return check;
  } else {
    // use default value
    return check;
  }
}
