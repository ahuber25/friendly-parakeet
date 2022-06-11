// Assignment code here
var userPassword = "";
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword () {

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


}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
