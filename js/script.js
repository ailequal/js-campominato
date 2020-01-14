// bot generates 16 random numbers between 1 and 100
var botNumbers = [];
for (var i = 0; i < 16; i++) {
  botNumbers.push(parseInt(getRndInteger(1, 100)));
}
botNumbers.sort();
console.log(botNumbers);

// ask user to insert for 84 times a number between 1 and 100

// if number is on the bot list, game over

// the program display the user score


// function
// random number generator between min and max
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
