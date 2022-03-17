var generatePassword = function() {
  if (password === "" || password === null) {
    window.alert = ("Welcome to your Password Generator!\n\nLet's make a 💪 & 🔐 password!");
  }
}
var pass = [];

for (var randomLow = 0; randomLow < 8; randomLow++) {
    pass.push(randomLow);
}
console.log(pass);

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

// *********************
// VARIABLE DECLARATIONS
// *********************
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x","y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var integers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];

// *********************
// RANDOM GENERATORS
// *********************
var randomLow = lowerCase[Math.floor(Math.random() * lowerCase.length)];
console.log(randomLow);
var randomUpp = upperCase[Math.floor(Math.random() * upperCase.length)];
console.log(randomUpp);
var randomInt = integers[Math.floor(Math.random() * integers.length)];
console.log(randomInt);
var randomSym = symbols[Math.floor(Math.random() * symbols.length)];
console.log(randomSym);

generatePassword();