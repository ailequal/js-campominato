var min = 1;
var max = 10;
var item = 17;
var result = isBetween(min, max, item);
console.log(result);


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
