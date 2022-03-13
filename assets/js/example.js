/* Data Types:
undefined, null, boolean, string, symbol, number, and object
*/

var myName = "Victor";
console.log(myName);

myName = 8;
console.log(myName);

let ourName = "freeCodeCamp";
console.log(ourName);

const pi = 3.14;
console.log(pi);

/* Storing Values with Assignment Operator */
var a;
var b = 2;
console.log(a);
a = 7;
console.log(a + b);

b = a;
console.log(b);

/* Initializing Variables w/ Assignment Operator */
var a = 9;
console.log(a);

/* Uninitialized Variables */
var a = 5;
var b = 10;
var c = "I am a";

// do not change code below
a = a + 1; // equals 6
b = b + 5; // equals 15
c = c + " String!"; // returns "I am a String!"

console.log(a, b, c);

/* Case Sensitivity in Variables */
// declaration
var IMpropercamelCASE; // improper
var properCamelCase; // proper
var TitleCaseOver; // improper
var improperCamelCase; // now it is proper
var titleCaseOver; // proper
// assignments
improperCamelCase = 10; // NOW IT IS PROPERCAMELCASE!
properCamelCase = "A String";
titleCaseOver = 9000;

console.log(improperCamelCase, properCamelCase, titleCaseOver);

/* Adding Numbers */
var sum = 10 + 10;
console.log(sum);

/* Subtracting Numbers */
var difference = 45 - 33;
console.log(difference);

/* Multiplying Numbers */
var product = 8 * 10;
var product1 = 8 * 0;
console.log(product, product1);

/* Dividing Numbers */
var quotient = 66 / 33;
console.log(quotient);

/* Incrementing Numbers */
var myVar = 87;// change code below
// myVar = myVar + 1; // SLOW way
myVar++; // FAST way, results in 88 instead of 87.
console.log(myVar);

/* Decrementing Numbers */
var myVar = 11; //change code below

//myVar = myVar - 1; // SLOW way
//console.log(myVar);
myVar--;
console.log(myVar);

/* Decimal Numbers */
var ourDecimal = 5.7; // change code below
console.log(ourDecimal);
var myDecimal = 0.0008;
console.log(myDecimal);

/* Multiply Decimals */
var product = 2.0 * 2.5;
console.log(product);

/* Divide Numbers */
var quotient = 4.4 / 2.0;
console.log(quotient);

/* Finding a Remainder */
var remainder;
remainder = 11 % 3; // 11 - 9 = result 2
console.log(remainder);

/* Compound Assignment w/ Augmented Addition */
var a = 3;
var b = 17;
var c = 12; // change code below

/*
a = a + 12; // you can rewrite this differently
b = 9 + b;
c = c + 7; // see code below
console.log(a, b, c);
*/

a += 12;
b += 9;
c += 7;
console.log(a, b, c);

/* Compound Assignment w/ Augmented Subtraction */
var a = 3;
var b = 17;
var c = 12; // change code below

//a = a - 12; // you can rewrite it; see below

a -= 1;
b -= 3;
c -= 2;
console.log(a, b, c);

/* Compound Assignment w/ Augmented Multiplication */
var a = 3;
var b = 17;
var c = 12; // change code below

a *= 2;
b *= 0;
c *= 3;
console.log(a, b, c);

/* Compound Assignment w/ Augmented Division */
var a = 50;
var b = 100;
var c = 75; // change code below

a /= 2;
b /= 3;
c /= 5;
console.log(a, b, c);

/* Declare String Variables */
var firstName = "Victor";
var lastName = "Lujan"; // change code below

console.log(firstName, lastName);

/* Escaping Literal Quotes in Strings */
//var myStr = "I am a "double quoted" string inside "double quotes""; // wrong
var myStr = "I am a \"double quoted\" string inside \"double quotes\"!";
console.log(myStr);

/* Quoting Strings with Single Quotes */
var myStr = `'<a href="https://www.example.com" target="_blank">Link</a>'`;
console.log(myStr);

/* Escape Sequences in Strings */
/***
CODE OUTPUT
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
***/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);

/* Concatenating Strings w/ Plus Operator */
var ourStr = "I come first. " + " I come second.";
console.log(ourStr);

var myStr = "This is the start. " + "This is the end.";
console.log(myStr);

/* Concatenating Strings with Plus Equals Operator */
var ourStr = "I come first. ";
ourStr += "I come second!"; // example
console.log(ourStr);

var myStr = "This is first sentence. ";
myStr += "This is my second sentence!"; // second example
console.log(myStr);

/* Constructing Strings with Variables */
var ourNam = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourNam + ", how are you?";
console.log(ourStr);

var myName = "Victor";
var myStr = "My name is " + myName + ". It's a pleasure to meet you!";
console.log(myStr);

/* Appending Variables to Strings */
var anAdjective = "awesome!"; // example
var ourStr = "Victor is ";
ourStr += anAdjective;
console.log(ourStr);

var someAdj = "worthwhile"; // example
var myStr = "Learning to code is ";
myStr += someAdj;
console.log(myStr);

/* Find Length of String */
var firstNameLength = 0; // example
var firstName = "Victor";

firstNameLength = firstName.length;
console.log(firstNameLength);

var lastNameLength = 0; // example
lastName = "Lujan";
lastNameLength = lastName.length;
console.log(lastNameLength);

/* Bracket Notation to Find First Character in String */
var firstLetterOfFirstName = ""; // example
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName);

var firstLetterOfLastName = ""; // example
var lastName = "Lujan";

firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);

/* String Immutability */
var myStr = "Jello World"; // example

myStr = 'Hello world'; // FIX ME
console.log(myStr);

/* Bracket Notation to Find Nth Character in String */
var firstName = "Victor";
var secondLetterOfFirstName = firstName[1];
console.log(secondLetterOfFirstName);

var lastName = "Lujan";
var thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName);

/* Bracket Notation to Find Last Character in String */
var firstName = "Victor";
var lastLetterOfFirstName = firstName[firstName.length - 1];
console.log(lastLetterOfFirstName);

var lastName = "Lujan";
var lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName);

/* Bracket Notation to Find Nth-to-Last Character in String */
var firstName = "Victor"; // example
var secondToLastLetter = firstName[firstName.length - 2];
console.log(secondToLastLetter);

/* Word Blanks */
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myNoun + " is " + myAdjective + "! You better " + myVerb + " " + myAdverb + "!";

    return result;
}
console.log(wordBlanks("dog", "big", "run", "quickly"));
console.log(wordBlanks("woman", "ugly", "hide", "quietly"));

/* Store Multiple Values w/ Arrays */
var profileInfo = ["Victor", 29];
console.log(profileInfo);

var groceryList = ["Apples", "Bananas", "Strawberries"];
console.log(groceryList);

/* Nested Arrays */
var ourNestedArray = [["Victor", 29], ["July", 27]];
console.log(ourNestedArray);

/* Access Array Data w/ Indexes */
var ourArray = [50, 60, 70]; // example
var ourData = ourArray[1]; // equals 60
console.log(ourData);

var potentialCouple = [["Victor", 29, "00/00/0000"], ["July", 27, "00/00/0000"]]; // jaja bad example?
var marriedCouple = potentialCouple[0] + potentialCouple[1];
console.log(marriedCouple);

var myArray = [50, 60, 70];
var myData = myArray[0];
console.log(myData);

/* Modify Array Data w/ Indexes */
var ourList = [18, 64, 99];
console.log(ourList); // checking 
ourList[1] = 45; // ourList now equals [18, 45, 99]
console.log(ourList); // checking again
