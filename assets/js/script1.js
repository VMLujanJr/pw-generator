/*
var initializeGenerator = function(response) {

  window.alert("Welcome to your Password Generator!\n\nLet's make a 💪 & 🔐 password!");
  
  window.alert("You have the option to include:\n - UPPERCASE letters\n - lowercase letters\n - Numbers\n - Symbols");
  var reponse 
  var readyToStart = window.prompt("Are you ready to start? Type 'Yes' or 'No'");
  if (readyToStart) {

  }
};
*/


// ****************
//  LIST OF ARRAYS
// ****************

/* ALPHABET: Upper & Lower Case */
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x","y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var integers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];

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

// *****************
//  Randomize Arrays
// *****************

var randomIntegers = integers[Math.floor(Math.random() * integers.length)];

console.log(randomIntegers);
/*
var randomAlphabet = function () {
  var zeroToTwentyFive = alphabet.length;
  var zeroToOne = [0, 1];
  //console.log(zeroToTwentyFive + "working");

  var randomZeroTwentyFive = [Math.floor(Math.random() * zeroToTwentyFive)];
  var randomZeroOne = [Math.floor(Math.random() * zeroToOne.length)];
  console.log(randomZeroTwentyFive);
  console.log(randomZeroOne);

  
}

console.log(randomAlphabet());

*/
initializeGenerator();