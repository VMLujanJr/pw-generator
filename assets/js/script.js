// *********************
// VARIABLE DECLARATIONS
// *********************
/* Four Types of Characters */
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var integers = "0123456789";
var symbols = "!@#$%^&*()_+?><:{}[]";

/* Empty / Filled Password Array */
var uniquePassword = {
  emptyArray: "",
  reset: function() {
    this.emptyArray = "";
  }
};

// *********************
// COMBINES CHARACTERS TOGETHER
// *********************
var combineCharacters = function() {
  /* Collects Character Type Arrays into a single array */
  var createCharArray = [];
  
  /* Character Type Confirmation */
  var acceptLow = confirm("Want us to include lower case letters?");
  var acceptUpp = confirm("Want us to include upper case letters?");
  var acceptInt = confirm("Want us to include numbers?");
  var acceptSym = confirm("Want us to include symbols?");
  
  /* If no character type is chosen, you will be prompted to try again */
  if (acceptLow || acceptUpp || acceptInt || acceptSym) {
    /* If you choose at least one character type, these if statements will concantenate and create one array. */
    if (acceptLow) {
      createCharArray = createCharArray.concat(lowerCase.split(""));
    }
    if (acceptUpp) {
      createCharArray = createCharArray.concat(upperCase.split(""));
    }
    if (acceptInt) {
      createCharArray = createCharArray.concat(integers.split(""));
    }
    if (acceptSym) {
      createCharArray = createCharArray.concat(symbols.split(""));
    }
  } else {
    alert("You did not accept any character types! Please try again!");

    return combineCharacters();
  }

  return createCharArray;
};

// *********************
// GENERATES PASSWORD
// *********************
var initGenerator = function() {
  // reset password to empty before creating a new one
  uniquePassword.reset();

  var arrayOfCharacters = combineCharacters();

  /* Character Length Prompt / convert text to integers */
  var howManyChars = prompt("How many characters? You may type a number between 8 and 128 characters!");
  var generateChars = parseInt(howManyChars);

  /* Verifies if the character length was below 8, or higher than 128! */
  if (generateChars >= 8 && generateChars <= 128) {
    if (uniquePassword.emptyArray === null || uniquePassword.emptyArray === "") {
        for (var i = 0; i < generateChars; i++) {
        var randomIndex = Math.floor(Math.random() * arrayOfCharacters.length);
        uniquePassword.emptyArray += arrayOfCharacters[randomIndex];
      }
    } else {
      alert("The unique password did not reset before creating a new unique password!");
    }
  } else {
    alert("You typed in a number below 8 or higher than 128! Try again!");
  }
  return uniquePassword.emptyArray
};

// ************************
// DO NOT CHANGE CODE BELOW
// ************************

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = initGenerator();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);