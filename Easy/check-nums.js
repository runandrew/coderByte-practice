// Check Nums

function CheckNums(num1, num2) {
  if (num2 > num1) { // if 2>1, return true
    return true;
  } else if (num1 == num2){ // if num1 == num2, return -1
    return "-1";
  } else { // if neither, return false
    return false;
  }
}

// Alternative solution, using ternary expressions
function CheckNumsAlt(num1, num2) {
  return (num2 > num1) ? true : (num1 == num2) ? "-1" : false;
}
