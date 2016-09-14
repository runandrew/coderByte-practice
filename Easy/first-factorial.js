// First factorial

// Solved using a for loop
// function FirstFactorial(num) {
//
//   factorial = 1;
//   for (var i = 1; i <= num; i++) {
//     factorial *= i;
//   }
//   return factorial;
// }

// Solved using recursion
function FirstFactorial(num) {

// write a recursive function that increments down each time and multplies the previous factorial
// in the case of 1, return 1 as the answer
  if (num === 1) {
    return 1;
  } else {
    return num * FirstFactorial(num - 1);
  }

}

console.log(FirstFactorial(4));
