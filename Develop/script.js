// Assignment code here
var userPassword = "";
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numerical = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var options = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

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

  if ( lowercase === false || uppercase === false || numerical === false || special === false) {
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

  return passwordOptions;
}

var randomChoice = function(arr) {
var randomOptions = Math.floor(Math.random() * arr.length);
var randomElement = arr[randomOptions];
}

var generatePassword = function() {
  var choices = passwordOptions();
  var result = [];

  var possible =[];
  var absolute =[];

  if (!choices) return null;

  if (choices.uppercase) {
    possible = possible.concat(special);
    absolute.push(randomChoice(special));
  }

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
