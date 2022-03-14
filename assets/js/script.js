var initializeGenerator = function() {
  
  window.alert("Welcome to your Password Generator!\n\nLet's make a 💪 & 🔐 password!");
  
  window.alert("You have the option to include:\n - UPPERCASE letters\n - lowercase letters\n - Numbers\n - Symbols");

  var readyToStart = window.prompt("Are you ready to start? Type 'Yes' or 'No'");

  if (readyToStart) {

  }
};

// ****************
//  LIST OF ARRAYS
// ****************

/* ALPHABET: Upper & Lower Case */
var alphabet = [
  ["A", "a"],
  ["B", "b"],
  ["C", "c"],
  ["D", "d"],
  ["E", "e"],
  ["F", "f"],
  ["G", "g"],
  ["H", "h"],
  ["I", "i"],
  ["J", "j"],
  ["K", "k"],
  ["L", "l"],
  ["M", "m"],
  ["N", "n"],
  ["O", "o"],
  ["P", "p"],
  ["Q", "q"],
  ["R", "r"],
  ["S", "s"],
  ["T", "t"],
  ["U", "u"],
  ["V", "v"],
  ["W", "w"],
  ["X", "x"],
  ["Y", "y"],
  ["Z", "z"]
];
console.log(alphabet.length); // returns 26
console.log(alphabet.length - 1); // returns 25, array starts at 0

var displayAlphabet = alphabet[0][1]; // example
console.log(displayAlphabet); // returns upper case A

/* INTEGERS: 0 - 9 */
var integers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(integers.length); // returns 10
console.log(integers.length - 1); // returns 9, array starts at 0

/* SYMBOLS: !@#$%^&* */
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];
console.log(symbols.length); // returns 8
console.log(symbols.length - 1); // returns 7, array starts at 0

// ************************
// DO NOT CHANGE CODE BELOW
// ************************

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

initializeGenerator();