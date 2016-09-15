// Simple Symbols

function SimpleSymbols(str) {

// find the location of each letter
// using that location, look at the place before and after, check if it's a +

// pad the string to avoid reference errors
str = "=" + str + "=";
var status = true;
// create a variable with a regexp of the alphabet, without case sensitivity
var lang = /[a-z]/gi;

// roll through the string characters
for (var i = 1; i < str.length; i++) {
    if (lang.test(str.charAt(i))) { // check if the current character is a alphabet character
        if (str.charAt(i-1) == "+" && str.charAt(i+1) == "+") { // check if the character before and after is a +
            status = true; // if it is true, set to status true
        } else {
            return false; // if it is false, end the program and give a false status
        }
    }
}
return console.log(status);
}
// keep this function call here
SimpleSymbols("f++d+");
