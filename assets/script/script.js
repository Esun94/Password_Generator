// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of special characters/ numbers/ upper/ lowercase
var specialChar = ['!', '@', '#', '$', '%', '&', '*'];
// console.log(specialChar);
var numberChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// console.log(numberChar)
var lowerStr = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
var lowerCase = lowerStr.split(' ');
// console.log(lowerCase);
var upperStr = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
var upperCase = upperStr.split(' ');
// console.log(upperCase);

 // Write password to the #password input
 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function to prompts user of password options
  function getUserOptions() {
    //  Created a variable to store password length from userInput
    var passLength = prompt('Enter Password Length: Choose between 8 - 128 charcters');
    // console.log(passLength);
    // parseInt() to make string to array
    var passLengthInt = parseInt(passLength)
    // console.log(passLengthInt);


    // create a conditional statement to check if the lenght is an actual number 8 Eight
    // create a conditional to check if PW lenght is atleast 8 char long
    // create a conditional to check if PW lenght is lower than 128 chars

    if (isNaN(passLengthInt)) {
      passLengthInt
      alert("Must enter NUMBER characters")
      return
    } else if (passLengthInt < 8) {
      alert('Password must be minimum 8 characters');
      return
    } else if (passLengthInt > 128) {
      alert('Password must be a maximum of 128 characters');
      return
    };


    //storing user input for character options choices
    if (confirm('Do you want to use special characters?') == true) {
      specialChar
      // console.log(specialChar)
    } else {
      specialChar = [];
      // console.log(specialChar)
    };

    if (confirm('Do you want to use numbers?') == true) {
      numberChar
      // console.log(numberChar)
    } else {
      numberChar = []
      // console.log(numberChar)
    };

    if (confirm('Do you want to use lowercase letters?') == true) {
      lowerCase
      // console.log(lowerCase)
    } else {
      lowerCase = []
      // console.log(lowerCase)
    };

    if (confirm('Do you want to use uppercase letters?') == true) {
      upperCase
      // console.log(upperCase)
    } else {
      upperCase = []
      // console.log(upperCase)
    };
  // console.log([specialChar, numberChar, lowerCase, upperCase]);

  // Create a var to store user input
  var userInput = {
    passLength: passLengthInt,
    specialChar,
    numberChar: numberChar,
    lowerCase: lowerCase,
    upperCase: upperCase,
  }
  return userInput
  



  };

  function randomElement (randomArray) {
    return randomArray[Math.floor(Math.random()*randomArray.length)];
  }
  

  function writePassword() {
    
    var userOptions = getUserOptions();
    var results = []
    var userPassChars = []
    var guarChar = []

    if(userOptions.specialChar) {
      userPassChars = userPassChars.concat(userOptions.specialChar)
      guarChar.push(randomElement(specialChar));
    }
    if(userOptions.numberChar) {
      userPassChars = userPassChars.concat(userOptions.numberChar)
      guarChar.push(randomElement(numberChar));
    }
    if(userOptions.lowerCase) {
      userPassChar = userPassChars.concat(userOptions.lowerCase)
      guarChar.push(randomElement(lowerCase));
    }
    if(userOptions.upperCase) {
      userPassChars = userPassChars.concat(userOptions.upperCase)
      guarChar.push(randomElement(upperCase));
    }
    // console.log(userPassChars);
    // console.log(guarChar);
    
    //var password = generatePassword();
    // var passwordText = document.querySelector("#password");
  
    // passwordText.value = password;
    for(i = 0; i < userOptions.passLength; i++) {
      var randomCharacter = randomElement(userPassChars)
      results += randomCharacter

    };
    alert(results)
    return results

  };