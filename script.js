// Assignment code here

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = "";
  var passwordText = document.querySelector("#password");
  var charSet = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz', '0123456789', '!@#$%^&*()_+=-'];
  var charLength = window.prompt("What is the desired length for your password? Must be between 8 and 128 characters.");
  window.alert('For the following prompts, select "OK" for YES and "Cancel" for NO.' )
  var upperCase = window.confirm("Include upper case characters?");
  var lowerCase = window.confirm("Include lower case characters?");
  var numbers = window.confirm("Will this password include numbers?");
  var symbols = window.confirm("Are special characters included in this password?");
  if (8 <= charLength && charLength <=128) {
    if ((upperCase)||(lowerCase)||(symbols)||(numbers)){
    password = generatePassword();
    } else {
      window.alert("No password character sets selected, try again.")
    }
  }else{
    window.alert("Invalid password length, try again.");

}
  passwordText.value = password;

}

function generatePassword(){

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
