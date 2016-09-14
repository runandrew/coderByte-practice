// Simple adding

function SimpleAdding(num) {
  // define a variable that will keep the stored answer
  var total = 0;
  // make a loop starting at 0 and keep adding to the total each time
  for (var i = 1; i <= num; i++) {
    total += i;
  }
  return total;
}

console.log(SimpleAdding(4));
