// Letter Changes

function LetterChanges(str) {

// replace every letter in the string with the letter following it
// get the charCode of the letter, and then add 1 to it,
// convert the charCode back to a letter
  var converted = str.replace(/[a-z]/gi, function(char) {
    return (char === 'z' || char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
  });

// each letter is converted, now find the vowels and uppercase them
  var capitalized = str.replace(/a|e|i|o|u/gi, function(vowel) {
    return vowel.toUpperCase();
  });

  return capitalized;
}

console.log(LetterChanges("this is a test to see how well this works"));
