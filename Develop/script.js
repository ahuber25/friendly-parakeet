// Assignment code here
var userPassword = "";
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numerical = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var options = "";

function passwordOptions () {

  var length = Number(prompt("Enter password length between 8 - 128 characters."));

  if (Number.isNaN(length)) {
    window.alert("You must enter a valid number.");
    return null;
  }

  if (length<8) {
    window.alert("Password must be 8 or more characters long.");
    return null;
  }

  if (length>128) {
    window.alert("Password must be 128 or fewer characters long.");
    return null;
  }

  var lowercase = window.confirm("Would you like lowercase letters?");
  var uppercase = window.confirm("Would you like uppercase letters?");
  var numerical = window.confirm("Would you like numbers?");
  var special = window.confirm("Would you like special characters?");

  if ( lowercase === false && uppercase === false && numerical === false && special === false) {
    window.alert("You must choose at least one field.");
    return null;
  }

  var passwordChoices = {
    length: length,
    lowercase: lowercase,
    uppercase: uppercase,
    numerical: numerical,
    special: special
  }

  return passwordChoices;
}

var randomChoice = function(array) {
var randomOptions = Math.floor(Math.random() * array.length);
var randomElement = array[randomOptions];
return randomElement;
}

var generatePassword = function() {
  var choices = passwordOptions();
  var result = [];

  var possible =[];
  var absolute =[];

  if (choices.uppercase) {
    possible = possible.concat(uppercase);
    absolute.push(randomChoice(uppercase));
  }

  if (choices.lowercase) {
    possible = possible.concat(lowercase);
    absolute.push(randomChoice(lowercase));
  }

  if (choices.numerical) {
    possible = possible.concat(numerical);
    absolute.push(randomChoice(numerical));
  }

  if (choices.special) {
    possible = possible.concat(special);
    absolute.push(randomChoice(special));
  }

  for (var i=0; i<choices.length; i++) {
    var probable = randomChoice(possible);
    result.push(probable);
  }

  for (var i=0; i<absolute.length; i++) {
    result[i] = absolute[i];
  }

  return result.join('');

}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
