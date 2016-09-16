// Fizz Buzz

// for multiples of 3, print fizz
// for multiples of 5, print Buzz
// for both, print FizzBuzz
// otherwise, print the number

function fizzBuzz() {
  for (var i = 1; i <= 100; i++) {

    var output = "";
    var flag = false;

    if (i % 3 === 0) {
      output += "Fizz";
      flag = true;
    }
    if (i % 5 === 0) {
      output += "Buzz";
      flag = true;
    }
    if (!flag) {
      output = i;
    }

    console.log(output);
  }
}

// Alt
function fizzBuzzAlt() {
  for (var i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzzAlt()
