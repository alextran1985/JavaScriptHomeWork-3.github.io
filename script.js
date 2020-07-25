// Assignment Code
var generateBtn = document.querySelector("#generate");
var lenght = ">= 8 <= 128"
var uppercaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lowercaseString = 'abcdefghijklmnopqrstuvwxyz'
var numberString = '0123456789'
var symbolString = '!@#$%^&*()'

// ask user how they want their password to be between 8-128
// use the prompt function to collect user input and store result in varible
var userInput = prompt("How long  would you like your password to be?");
if (userInput >= 8 <= 128) {
  alert(`Your Password will be ${userInput} long`);
}
// then ask user if they want to include Uppercase, lowercase, number and symbol.
// use the confirm function to collect user input and store result in different varible
// Make something to hold info in a datatype.
var upperCase = confirm("Would you like to include uppercase letters?")
if (upperCase === true) {
  alert(`You have chosen yes to uppercase letters`);
}

var lowerCase = confirm("Would you like to include lowercase letters?")
if (lowerCase === true) {
  alert(`You have chosen yes to lowercase letters`);
}

var number = confirm("Would you like to include number?")
if (number === true) {
  alert(`You have chosen yes to number`);
}

var symbols = confirm("Would you like to include symbols?")
if (symbols === true) {
  alert(`You have chosen yes to symbols`);
}


// make a function to generate password using the different varible
// use result from above to randomly generate charaters
// use a function to generate password length that the user want
// use random function? Math.random();

// need to create a container variable to the strings that user want
var combinedString = "";
// we need a conditional=if else statment
// if true include character if false exclude character
// use += operator 

if (number === true) {
  combinedString += numberString;
}
if (lowerCase === true) {
  combinedString += lowercaseString;
}
if (upperCase === true) {
  combinedString += uppercaseString;
}
if (symbols === true) {
  combinedString += symbolString;
}

function generatePassword(length) {
  var result = '';
  var combinedStringLength = combinedString.length;
  // console.log("ConbineStringLength: " + combinedStringLength);
  // console.log("length: " + length);

  for (var i = 0; i < length; i++) {
    //console.log("result: " + result);
    result += combinedString.charAt(Math.floor(Math.random() * combinedStringLength));
  }
  console.log(result);
  return result;
}
// display password to user
function writePassword() {

  var password = generatePassword(userInput);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
