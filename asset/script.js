function generatePassword() {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()-_+=[]{}|;:,.<>?";

  var charset = "";

  var passwordLength = parseInt(
    prompt("Enter the length of the password (between 8 and 128 characters)")
  );
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(
      prompt(
        "Invalid length. Please enter a length between 8 and 128 characters"
      )
    );
  }

  var includeLowercase = confirm(
    "Do you want to include lowercase characters?"
  );
  var includeUppercase = confirm(
    "Do you want to include uppercase characters?"
  );
  var includeNumeric = confirm("Do you want to include numeric characters?");
  var includeSpecial = confirm("Do you want to include special characters?");

  while (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumeric &&
    !includeSpecial
  ) {
    alert("At least one character type must be selected!");
    includeLowercase = confirm("Do you want to include lowercase characters?");
    includeUppercase = confirm("Do you want to include uppercase characters?");
    includeNumeric = confirm("Do you want to include numeric characters?");
    includeSpecial = confirm("Do you want to include special characters?");
  }

  if (includeLowercase) {
    charset += lowercaseChars;
  }
  if (includeUppercase) {
    charset += uppercaseChars;
  }
  if (includeNumeric) {
    charset += numericChars;
  }
  if (includeSpecial) {
    charset += specialChars;
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);
