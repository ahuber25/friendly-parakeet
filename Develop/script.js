// Assignment code here
var userPassword = "";
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
var uppercase = ["A", "B", "C", "D"]
var numbers = ["0", "1"]
var special = ["!", "@"]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword () {

  window.prompt("Enter password between 8 - 128 characters.");
  window.prompt("Would you like lowercase letters?");
  window.prompt("Would you like uppercase letters?");
  window.prompt("Would you like numbers?");
  window.prompt("Would you like special characters?");


}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
