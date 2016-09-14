// Letter capitalize

function LetterCapitalize(str) {

  // split the string into an array of words
  var words = str.split(" ");
  var letterCap = "";

  // loop through each word and change the first letter to a capital Letter
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1, words[i].length);
  }

  // return the words in the array as a joined string, separated by spaces
  return words.join(" ");
}

console.log(LetterCapitalize("this is a test"));
