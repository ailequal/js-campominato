// var
var level = '';

// ask for which level to play
// level 0 > 1 to 100 with 84 times
// level 1 > 1 to 80 with 64 times
// level 2 > 1 to 50 with 34 times
do {
  level = parseInt(prompt('Select a level difficulty: 0 or 1 or 2'));
} while (level !== 0 && level !== 1 && level !== 2);
console.log('level set to', level);

// generate 16 random numbers from 1 to 100 all different and store them in an array

// ask user 84 times to insert a number between 1 and 100

// if number is on the main list, gave over

// otherwise keep asking numbers 84 times

// keep score of everything




// function
// generate random number between min and max, both incluced
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
