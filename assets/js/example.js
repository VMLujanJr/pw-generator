// **************************************************************************
/* Data Types: undefined, null, boolean, string, symbol, number, and object */
// **************************************************************************
var myName = "Victor";
console.log(myName);

myName = 8;
console.log(myName);

let ourName = "freeCodeCamp";
console.log(ourName);

const pi = 3.14;
console.log(pi);

//***************************************************************************
/* Storing Values with Assignment Operator */
// **************************************************************************
var a;
var b = 2;
console.log(a);
a = 7;
console.log(a + b);

b = a;
console.log(b);

//***************************************************************************
/* Initializing Variables w/ Assignment Operator */
// **************************************************************************
var a = 9;
console.log(a);

// **************************************************************************
/* Uninitialized Variables */
// **************************************************************************
var a = 5;
var b = 10;
var c = "I am a";

// do not change code below
a = a + 1; // equals 6
b = b + 5; // equals 15
c = c + " String!"; // returns "I am a String!"

console.log(a, b, c);

// **************************************************************************
/* Case Sensitivity in Variables */
// **************************************************************************
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

// **************************************************************************
/* Adding Numbers */
// **************************************************************************
var sum = 10 + 10;
console.log(sum);

// **************************************************************************
/* Subtracting Numbers */
// **************************************************************************
var difference = 45 - 33;
console.log(difference);

// **************************************************************************
/* Multiplying Numbers */
// **************************************************************************
var product = 8 * 10;
var product1 = 8 * 0;
console.log(product, product1);

// **************************************************************************
/* Dividing Numbers */
// **************************************************************************
var quotient = 66 / 33;
console.log(quotient);

// **************************************************************************
/* Incrementing Numbers */
// **************************************************************************
var myVar = 87;// change code below
// myVar = myVar + 1; // SLOW way
myVar++; // FAST way, results in 88 instead of 87.
console.log(myVar);

// **************************************************************************
/* Decrementing Numbers */
// **************************************************************************

var myVar = 11; //change code below

//myVar = myVar - 1; // SLOW way
//console.log(myVar);
myVar--;
console.log(myVar);

// **************************************************************************
/* Decimal Numbers */
// **************************************************************************
var ourDecimal = 5.7; // change code below
console.log(ourDecimal);
var myDecimal = 0.0008;
console.log(myDecimal);

// **************************************************************************
/* Multiply Decimals */
// **************************************************************************
var product = 2.0 * 2.5;
console.log(product);

// **************************************************************************
/* Divide Numbers */
// **************************************************************************
var quotient = 4.4 / 2.0;
console.log(quotient);

// **************************************************************************
/* Finding a Remainder */
// **************************************************************************
var remainder;
remainder = 11 % 3; // 11 - 9 = result 2
console.log(remainder);

// **************************************************************************
/* Compound Assignment w/ Augmented Addition */
// **************************************************************************
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

// **************************************************************************
/* Compound Assignment w/ Augmented Subtraction */
// **************************************************************************
var a = 3;
var b = 17;
var c = 12; // change code below

//a = a - 12; // you can rewrite it; see below

a -= 1;
b -= 3;
c -= 2;
console.log(a, b, c);

// **************************************************************************
/* Compound Assignment w/ Augmented Multiplication */
// **************************************************************************
var a = 3;
var b = 17;
var c = 12; // change code below

a *= 2;
b *= 0;
c *= 3;
console.log(a, b, c);

// **************************************************************************
/* Compound Assignment w/ Augmented Division */
// **************************************************************************
var a = 50;
var b = 100;
var c = 75; // change code below

a /= 2;
b /= 3;
c /= 5;
console.log(a, b, c);

// **************************************************************************
/* Declare String Variables */
// **************************************************************************
var firstName = "Victor";
var lastName = "Lujan"; // change code below

console.log(firstName, lastName);

// **************************************************************************
/* Escaping Literal Quotes in Strings */
// **************************************************************************
//var myStr = "I am a "double quoted" string inside "double quotes""; // wrong
var myStr = "I am a \"double quoted\" string inside \"double quotes\"!";
console.log(myStr);

// **************************************************************************
/* Quoting Strings with Single Quotes */
// **************************************************************************
var myStr = `'<a href="https://www.example.com" target="_blank">Link</a>'`;
console.log(myStr);

// **************************************************************************
/* Escape Sequences in Strings */
// **************************************************************************
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

// **************************************************************************
/* Concatenating Strings w/ Plus Operator */
// **************************************************************************
var ourStr = "I come first. " + " I come second.";
console.log(ourStr);

var myStr = "This is the start. " + "This is the end.";
console.log(myStr);

// **************************************************************************
/* Concatenating Strings with Plus Equals Operator */
// **************************************************************************
var ourStr = "I come first. ";
ourStr += "I come second!"; // example
console.log(ourStr);

var myStr = "This is first sentence. ";
myStr += "This is my second sentence!"; // second example
console.log(myStr);

// **************************************************************************
/* Constructing Strings with Variables */
// **************************************************************************
var ourNam = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourNam + ", how are you?";
console.log(ourStr);

var myName = "Victor";
var myStr = "My name is " + myName + ". It's a pleasure to meet you!";
console.log(myStr);

// **************************************************************************
/* Appending Variables to Strings */
// **************************************************************************
var anAdjective = "awesome!"; // example
var ourStr = "Victor is ";
ourStr += anAdjective;
console.log(ourStr);

var someAdj = "worthwhile"; // example
var myStr = "Learning to code is ";
myStr += someAdj;
console.log(myStr);

// **************************************************************************
/* Find Length of String */
// **************************************************************************
var firstNameLength = 0; // example
var firstName = "Victor";

firstNameLength = firstName.length;
console.log(firstNameLength);

var lastNameLength = 0; // example
lastName = "Lujan";
lastNameLength = lastName.length;
console.log(lastNameLength);

// **************************************************************************
/* Bracket Notation to Find First Character in String */
// **************************************************************************
var firstLetterOfFirstName = ""; // example
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName);

var firstLetterOfLastName = ""; // example
var lastName = "Lujan";

firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);

// **************************************************************************
/* String Immutability */
// **************************************************************************
var myStr = "Jello World"; // example

myStr = 'Hello world'; // FIX ME
console.log(myStr);

// **************************************************************************
/* Bracket Notation to Find Nth Character in String */
// **************************************************************************
var firstName = "Victor";
var secondLetterOfFirstName = firstName[1];
console.log(secondLetterOfFirstName);

var lastName = "Lujan";
var thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName);

// **************************************************************************
/* Bracket Notation to Find Last Character in String */
// **************************************************************************
var firstName = "Victor";
var lastLetterOfFirstName = firstName[firstName.length - 1];
console.log(lastLetterOfFirstName);

var lastName = "Lujan";
var lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName);

// **************************************************************************
/* Bracket Notation to Find Nth-to-Last Character in String */
// **************************************************************************
var firstName = "Victor"; // example
var secondToLastLetter = firstName[firstName.length - 2];
console.log(secondToLastLetter);

// **************************************************************************
/* Word Blanks */
// **************************************************************************
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myNoun + " is " + myAdjective + "! You better " + myVerb + " " + myAdverb + "!";

    return result;
}
console.log(wordBlanks("dog", "big", "run", "quickly"));
console.log(wordBlanks("woman", "ugly", "hide", "quietly"));

// **************************************************************************
/* Store Multiple Values w/ Arrays */
// **************************************************************************
var profileInfo = ["Victor", 29];
console.log(profileInfo);

var groceryList = ["Apples", "Bananas", "Strawberries"];
console.log(groceryList);

// **************************************************************************
/* Nested Arrays */
// **************************************************************************
var ourNestedArray = [["Victor", 29], ["July", 27]];
console.log(ourNestedArray);

// **************************************************************************
/* Access Array Data w/ Indexes */
// **************************************************************************
var ourArray = [50, 60, 70]; // example
var ourData = ourArray[1]; // equals 60
console.log(ourData);

var potentialCouple = [["Victor", 29, "00/00/0000"], ["July", 27, "00/00/0000"]]; // jaja bad example?
var marriedCouple = potentialCouple[0][0] + " loves " + potentialCouple[1][0];
console.log(marriedCouple);

var myArray = [50, 60, 70];
var myData = myArray[0];
console.log(myData);

// **************************************************************************
/* Modify Array Data w/ Indexes */
// **************************************************************************
var ourList = [18, 64, 99];
console.log(ourList); // checking 
ourList[1] = 45; // ourList now equals [18, 45, 99]
console.log(ourList); // checking again

// **************************************************************************
/* Access Multi-Dimensional Arrays w/ Indexes */
// **************************************************************************
var myList = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];

var myData = myList[0][0]; // targets the first bracket "[1, 2, 3]" then targets 1 (because 1 = 0)
console.log(myData);

var myData = myList[2][1];
console.log(myData);

// **************************************************************************
/* Manipulate Arrays w/ push() */
// **************************************************************************
var ourArray = ["Victor", "M", "Dogs"]; // example
ourArray.push("Happy", "joy"); // equals to ["Victor", "M", "Dogs", "Happy", "joy"]
console.log(ourArray);

var ourArray = ["Victor", "M", "Dogs"]; // example 2
ourArray.push(["Happy", "joy"]); // equals to ["Victor", "M", "Dogs", ["Happy", "joy"]]
console.log(ourArray);

var myArray = [["Victor", 29], ["July", 27]]; // example 3
myArray.push(["Corgi", 0]);
console.log(myArray);

// **************************************************************************
/* Manipulate Arrays w/ pop() */
// **************************************************************************
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop(); // equals to 3, and ourArray now equals [1, 2]
console.log(ourArray);
console.log(removedFromOurArray);

var myArray = [["John", 23], ["cat", 2]];

var removedFromMyArray = myArray.pop(); // equals to ["cat", 2], and myArray now equals ["John", 23]
console.log(myArray);
console.log(removedFromMyArray);

// **************************************************************************
/* Manipulate Arrays w/ shift() */
// **************************************************************************
var myList = ["Apples", "Oranges", ["Lettuce"]];
var removeFirstArray = myList.shift(); // targets 1st array
console.log(myList);
console.log(removeFirstArray);

// **************************************************************************
/* Manipulate Arrays w/ unshift() */
// **************************************************************************
var ourList = ["Pencils", "Pens", ["Markers"]];
ourList.shift(); // removes ["Pencils"]
console.log(ourList);
ourList.unshift("Watercolors"); // equals ["Watercolors", "Pens", ["Markers"]]
console.log(ourList);

// **************************************************************************
/* Shopping List */
// **************************************************************************
var myShoppingList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];

// **************************************************************************
/* Write Reusable Code w/ Functions */
// **************************************************************************
function ourReusableCode() { // example
    console.log("Hello there!");
}

ourReusableCode();
ourReusableCode();

function ourKarate() {
    console.log("Karate chop!");
}

ourKarate();
ourKarate();
ourKarate();

// **************************************************************************
/* Passing Values to Functions w/ Arguments */
// **************************************************************************
function ourFunctionWithArgs(a, b) { // Args is short for Arguments
    console.log(a - b) // 10 - 5 = 5
}
ourFunctionWithArgs(10, 5); // injects values to a and b

function functionNumber2(a, b, c) { // example 2
    console.log((a + b) - c);
}
functionNumber2(10, 5, 3);

// **************************************************************************
/* Global Scope and Functions */
// **************************************************************************
var myGlobal = 10; // global scope because its outside of functions

function fun1() {
    var oopsGlobal = 5; // var belongs in local scope, however, you can create a global scope if you define it without 'var'
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

// **************************************************************************
/* Local Scope and Functions */
// **************************************************************************
function myLocalScope() {
    var myVar1 = 5;
    console.log(myVar1);
}
myLocalScope();
// console.log(myVar1); // produces an error because myVar1 is only accessible in local scope. Not global.

// **************************************************************************
/* Global vs. Local Scope in Functions */
// **************************************************************************
// NOTE: Local will take presedence over global
var outerWear = "T-Shirt"; // global var

function myOutfit() {
    var outerWear = "sweater"; // local var
    return outerWear;
}

console.log(myOutfit()); // returns local var
console.log(outerWear); // returns global var

// **************************************************************************
/* Return a Value from a Function w/ Return */
// **************************************************************************
function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10));

function timesFive(num) {
    return num * 5;
}

console.log(timesFive(5));

// **************************************************************************
/* Understanding Undefined Value Returned from a Function */
// **************************************************************************
var sum = 0;
function addThree() {
    return sum += 3; // you have to specify a return otherwise it will be undefined.
}

function addFive() {
    sum += 5;
}

console.log(addThree());
console.log(addFive());

// **************************************************************************
/* Assignment w/ a Returned Value */
// **************************************************************************
var changed = 0; // equals 0

function change(num) { // added 10
    return (num + 5) / 3; // 10 + 5 = 15 / 3 = 5
}

changed = change(10); // equals 5
console.log(changed); // checking if true, true
// break
var processed = 0; // equals 0

function processArg(num) { // added 25
    return (num + 3) / 5; // 25 + 3 = 28 / 5 = 5.6
}

processed = processArg(25); // equals 5.6
console.log(processed); // checking if true, true

// **************************************************************************
/* Stand in Line */
// **************************************************************************
//NOTE: A QUEUE?
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// **************************************************************************
/* Boolean Values */
// **************************************************************************
function welcomeToBooleans() {
    return false; // or true
}

// **************************************************************************
/* Use Conditional Logic w/ If Statements */
// **************************************************************************
function ourTrueOrFalse(isItTrue) {
    if(isItTrue) { // if variable isItTrue is TRUE, then...
        return "Yes, it's true!";
    }
    return "No, it's false...";
}

console.log(ourTrueOrFalse(false)); // plugs in false

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true!";
    }
    return "No, that was false!";
}

console.log(trueOrFalse(true)); // plugs in true

// **************************************************************************
/* Comparison w/ Equality Operator */
// **************************************************************************
// ********************************
// IMPORTANT: CONCEPTS APPLY BELOW
// (Assignment Operator = )
// (Equals Operator == )
// (Strictly Equals Operator ===)
// ********************************
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(12));

// **************************************************************************
/* Comparison w/ the Strict Equality Operator */
// **************************************************************************
function testStrict(val) {
    if (val === 12) {
        return "Yes, the value is strictly equal to " + val;
    }
    return "No, the value is NOT strictly equal to " + val;
}

console.log(testStrict("12")); // No, not equal bc string
console.log(testStrict(12)); // Yes, equal bc integer

// **************************************************************************
/* Practice Comparing Different Values */
// **************************************************************************
function comparedEquality(a, b) {
    if (a == b) { // change == to === and vice versa to test
        return "Equal";
    }
    return "Not Equal";
}

console.log(comparedEquality(10, "10"));

// **************************************************************************
/* Comparison w/ the Inequality Operator */
// **************************************************************************
function testNotEqual(val) {
    if (val != 99) { // NOT EQUAL
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual(70));

// **************************************************************************
/* Comparison w/ the Strict Inequality Operator */
// **************************************************************************
function testStrictNotEqual(val) {
    if (val !== 17) { // NOT STRICTLY EQUAL
        return "Not Equal";
    }
    return "Equal";
}

console.log(testStrictNotEqual("17"));

// **************************************************************************
/* Comparison w/ the Logical And Operator */
// **************************************************************************
function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }
    if (val > 10) {
        return "Over 10";
    }
    return "10 or Under";
}
console.log(testGreaterThan(10)); // 11 results Over 10, 101 results Over 100

// **************************************************************************
/* Comparison w/ the Greater Than Or Equal To Operator */
// **************************************************************************
function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }
    if (val >= 10) {
        return "10 or Over";
    }
    return "Less than 10";
}
console.log(testGreaterOrEqual(9)); // 10 results in 10 orOver, 20 = 20 or Over

// **************************************************************************
/* Comparison w/ the Less Than Operator */
// **************************************************************************
function testLessThan(val) {
    if (val < 10) {
        return "Under 10"; // ORDER IS IMPORTANT; IF 20 WENT FIRST, IT WOULD NOT PROC 10.
    }
    if (val < 20) {
        return "Under 20";
    }
    return "20 or More";
}
console.log(testLessThan(21));

// **************************************************************************
/* Comparison w/ the Less Than Or Equal To Operator */
// **************************************************************************
function lessThanOrEqualTo(val) {
    if (val <= 10) {
        return "10 Or Less!";
    }
    if (val <= 20) {
        return "20 Or Less!";
    }
    return "Value is more than 20!";
}
console.log(lessThanOrEqualTo(21));

// **************************************************************************
/* Comparisons w/ the Logical And Operator */
// **************************************************************************
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}
console.log(testLogicalAnd(50));

// **************************************************************************
/* Comparisons w/ the Logical Or Operator */
// **************************************************************************
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}
console.log(testLogicalOr(21));

// **************************************************************************
/* Else Statements */
// **************************************************************************
function testElse(val) {
    var result = "";

    if (val > 5) {
        result = "Bigger Than 5";
    } else {
        result = "5 Or Smaller";
    }
    return result;
}
console.log(testElse(1));

// **************************************************************************
/* Else If Statements */
// **************************************************************************
function testElseIf(val) {
    if (val > 10) {
        return "Greater Than 10";
    } else if (val < 5) {
        return "Less Than 5";
    } else {
        return "Inside";
    }
}
console.log(testElseIf(5));

// **************************************************************************
/* Logical Order in If Else Statements */
// **************************************************************************
function orderMyLogic(val) {
    if (val < 5) {
        return "Less Than 5";
    } else if (val < 10) {
        return "Less Than 10";
    } else {
        return "10 Or More!";
    }

/* This is the WRONG ORDER   
    if (val < 10) {
        return "Less Than 10";
    } else if (val < 5) {
        return "Less Than 5";
    } else {
        return "10 or More";
    }
*/
}
console.log(orderMyLogic(1));

// **************************************************************************
/* Chaining If Else Statements */
// **************************************************************************
function testSize(val) {
    if (val < 5) {
        return "Tiny";
    } else if (val < 10) {
        return "Small";
    } else if (val < 15) {
        return "Medium";
    } else if (val < 20) {
        return "Large";
    } else {
        return "Huge";
    }
}
console.log(testSize(19));

/* Write chained if/else if statements to fulfill the following conditions:

num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"
*/

// **************************************************************************
/* Golf Code */
// **************************************************************************
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double-Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return names[6];
    }
}
console.log(golfScore(5, 4));

/*
Strokes     Return
1           "Hole-in-one!"
<= par - 2  "Eagle"
par - 1     "Birdie"
par         "Par"
par + 1     "Bogey"
par + 2     "Double-Bogey"
>= par + 3  "Go Home!"
*/

// **************************************************************************
/* Switch Statements */
// **************************************************************************
// IMPORTANT: Instead of using ELSE IF statements you can use this
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}

console.log(caseInSwitch(4));

/* Write a switch statement which tests val and sets answer for the following conditions
1 - alpha
2 - beta
3 - gamma
4 - delta
*/

// **************************************************************************
/* Default Option in Switch Statements */
// **************************************************************************
function switchOfStuff(val) {
    var answer = "";
    switch(val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}
console.log(switchOfStuff("b"));

// **************************************************************************
/* Multiple Identical Options in Switch Statements */
// **************************************************************************
function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}
console.log(sequentialSizes(7));

// **************************************************************************
/* Replacing If Else Chains w/ Switch */
// **************************************************************************
function chainToSwitch(val) {
    var answer = "";

    switch(val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
        case 7:
            answer = "Ate Nine";
            break;
        default:
            answer = "";
            break;
    }
/* change to SWITCH statement
    if (val === "bob") {
        answer = "Marley";
    } else if (val === 42) {
        answer = "The Answer";
    } else if (val === 1) {
        answer = "There is no #1";
    } else if (val === 99) {
        answer = "Missed me by this much!";
    } else if (val === 7) {
        answer = "Ate Nine";
    }
    return answer;
*/
}
console.log(chainToSwitch(1));

// **************************************************************************
/* Returning Boolean Values from Functions */
// **************************************************************************
function isLess(a, b) {
    return a < b; // returns true

/* Instead of this.. do above for boolean true or false
    if (a < b) {
        return true;
    } else {
        return false;
    }
*/
}
console.log(isLess(10, 15));

// **************************************************************************
/* Returning Early Pattern from Functions */
// **************************************************************************
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(-2, 2));

// **************************************************************************
/* Counting Cards */
// **************************************************************************
var count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    var holdbet = "Hold";
    if (count > 0) {
        holdbet = "Bet";
    }
    return count + " " + holdbet;
}

cc(2); cc('K'); cc(10); cc('K'); cc('A');
console.log(cc(4));

// **************************************************************************
/* Build JavaScript Objects */
// **************************************************************************
var myNewDog = { // myNewDog is called an object!
    "name": "Francis", // name is a property, then a value!
    "breed": "Bulldog",
    "legs": 3,
    "tail": "none",
    "ownerNames": ["Victor", "July"]
};
console.log(myNewDog);

// **************************************************************************
/* Accessing Object Properties w/ Dot Notation */
// **************************************************************************
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
console.log(hatValue);
console.log(shirtValue);

// **************************************************************************
/* Accessing Object Properties w/ Bracket Notation */
// **************************************************************************
var testObj = {
    "an entree": "hamburger", // the space in the property becomes a problem
    "my side": "veggies",
    "the drink": "water"
};

var entreeValue = testObj["an entree"]; // to fix that ^ problem we will use brackets
var drinkValue = testObj['the drink'];
console.log(entreeValue);
console.log(drinkValue);

// **************************************************************************
/* Accessing Object Properties w/ Variables */
// **************************************************************************
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 12;
var player = testObj[playerNumber];
console.log(player);

// **************************************************************************
/* Updating Object Properties */
// **************************************************************************
var ourDog = {
    "name": "Chopper",
    "accessory": "A red top hat",
    "legs": 2,
    "friends": ["Luffy", "Zoro", "Usop", "Nami", "Nico Robin", "Sanji", "Franky"],
    "affiliation": "Straw Hat pirates"
};
console.log(ourDog.name); // result before updating the object property
ourDog.name = "Raccoon Dog"; // updating object property
console.log(ourDog.name); // result after updating object property

// **************************************************************************
/* Add New Properties to an Object */
// **************************************************************************
var ourDog = {
    "name": "Camper",
    "legs": 2,
    "tails": 9,
    "friends": ["everything you want"]
};

ourDog.bark = "bow-wow";
console.log(ourDog.bark);

var myDog = {
    "name": "Candy",
    "friends": 2,
    "pedigree": false
};

myDog["ability"] = "flies";
console.log(myDog.ability);

// **************************************************************************
/* Delete Properties from an Object */
// **************************************************************************
var myWife = {
    "name": "July",
    "nationality": "USA",
    "attitude": true,
    "pretty": true
};

delete myWife.attitude;
console.log(myWife);

// **************************************************************************
/* Using Objects for Lookups */
// **************************************************************************
function phoneticLookup(val) {
    var result = "";

    var lookup = { // this instead of...
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    result = lookup[val];
    return result;
/*
    switch(val) { // this!
        case "alpha":
            result = "Adams";
            break;
        case "bravo":
            result = "Boston";
            break;
        case "charlie":
            result = "Chicago";
            break;
        case "delta":
            result = "Denver";
            break;
        case "echo":
            result = "Easy";
            break;
        case "foxtrot":
            result = "Frank";
    }
*/
}
console.log(phoneticLookup("foxtrot"));

// **************************************************************************
/* Testing Objects for Properties */
// **************************************************************************
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not Found";
    }
}
console.log(checkObj("ow")); // or type gift, pet, bed

// **************************************************************************
/* Manipulating Complex Objects */
// **************************************************************************
var myMusic = [
    { // first object!
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    }, // add comma
    { // added new record label // created second object
        "artist": "Victor",
        "title": "Storm Trooper",
        "release_year": 2022,
        "formats": [
            "YouTube video"
        ]
    }
];

// **************************************************************************
/* Accessing Nested Objects */
// **************************************************************************
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

// **************************************************************************
/* Accessing Nested Arrays */
// **************************************************************************
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[0];
console.log(secondTree);

// **************************************************************************
/* Record Collection */
// **************************************************************************
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }

    return collection;
}

updateRecords(2468, "tracks", "test")
// Alter values below to test your code
console.log(updateRecords(5439, "artist", "ABBA"));

// **************************************************************************
/* Iterate w/ While Loops */
// **************************************************************************
var aList = [];
var z = 0;

while(z <= 10) {
    aList.push(z);
    z++;
}

console.log(aList);
console.dir(aList);

// **************************************************************************
/* Iterate w/ For Loops */
// **************************************************************************
var ourArray = [];

for (var i = 0; i < 5; i++) {
    ourArray.push(i);
}
console.log(ourArray);

var myArray = [];

for (var i = 1; i < 15; i++) {
    myArray.push(i);
}
console.log(myArray);

// **************************************************************************
/* Iterate Odd Numbers w/ a For Loop */
// **************************************************************************
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
    ourArray.push(i);
}
console.log(ourArray);

var myArray = [];

for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}
console.log(myArray);

// **************************************************************************
/* Count Backwards w/ a For Loop */
// **************************************************************************
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
    ourArray.push(i);
}
console.log(ourArray);

var myArray = [];

for (var i = 9; i > 0; i -= 2) {
    myArray.push(i);
}
console.log(myArray);

// **************************************************************************
/* Iterate Through an Array w/ a For Loop */
// **************************************************************************
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}
console.log(ourTotal);

var myArr = [2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}
console.log(total);

// **************************************************************************
/* Nesting For Loops */
// **************************************************************************
function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }

    return product;
}

var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(product);

// **************************************************************************
/* Iterate w/ Do.. While Loops */
// **************************************************************************
var myArray = [];
var i = 10; // change to 0 or 10; you will get different results


do {
    myArray.push(i);
    i++;
} while (i < 5) // if 10, DO will run, then see its FALSE then stop.
console.log(i, myArray);

// **************************************************************************
/* Profile Lookup */
// **************************************************************************
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543238543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}

var data = lookUpProfile("Tim", "hello");
console.log(data);

// **************************************************************************
/* Generate Random Fractions */
// **************************************************************************
function randomFraction() {
    /* Math.random generates a random number between 0 - 1;
                                it COULD be 0, but NEVER 1! */
    return Math.random();
}
console.log(randomFraction());

// **************************************************************************
/* Generate Random Whole Numbers */
// **************************************************************************
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
console.log(randomNumberBetween0and19);

function randomWholeNum() {

    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());

// **************************************************************************
/* Generate Random Whole Numbers within a Range */
// **************************************************************************
function ourRandomRange(ourMin, ourMax) {

    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
var ourRandom = ourRandomRange (1, 2);
console.log(ourRandom);

function randomRange(myMin, myMax) {
    
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(13, 15);
console.log(myRandom);