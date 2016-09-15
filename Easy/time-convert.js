// Time Convert

function TimeConvert(num) {
// take the number and see how many times 60 goes into it, then set the rest as minutes
  var minutes = num % 60;
  var hours = (num - minutes) / 60;
  return hours.toString() + ":" + minutes.toString();
}


// ALternative
function TimeConvert(num) {
  var hours = Math.floor(num/60); // divide the num by 60 and then round down
  var minutes = num % 60; // find the remainder
  return hours + ':' minutes;
}
