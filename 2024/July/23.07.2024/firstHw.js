//Declare Variables:
/////////////////////////////////////////////////////////////////////////
let myFirstHomeWork
let FirstName = "liav";
let LastName = "ben shimon";
let myAge = "27";
let isStudent = true;
/////////////////////////////////////////////////////////////////////////////////////////
//Boolean Expressions:
//Write a boolean expression to check if age is greater than 18. 
//Assign the result to a variable isAdult.
//Write a boolean expression to check if firstName is equal to "John". 
//Assign the result to a variable isJohn.
let age = 20;
let isAdult = age >= 18;
console.log(isAdult);
let firstName = "John";
let isJohn = firstName === "John"
console.log(isJohn);
console.log(firstName);
////////////////////////////////Task 2:Functions and String Methods /////////////////////////////////////////
function greet (firstName, LastName) 
{ let fullName = firstName + " " + LastName;
    fullName = fullName.toUpperCase();
return ("Hello "+fullName+" Welcome to IITC Bootcamp");}
console.log (greet("liav","ben shimon"));

/////conditions - If and else////

function checkAge(age) {
    if (age <= 13) {console.log("You are a child");}
    else if (age<17 && age>13){console.log("You are a teenager");}
    else if (18 > age <= 64){console.log("You are an adult");}
    else console.log("You are old")
   }
   console.log(checkAge(13));
   
//// switch satatement:
function getDayMessage (dayOfWeek) {
       let message;
   switch (dayOfWeek) {
    case 'Monday':
message = "Start of the work week!.";
break;
case 'Tuesday':
   message = "It's Thursday!.";
   break;
case 'Wednesday':
    message = "Midweek already.";
    break;
case 'Thursday':
    message = "Weekend!.";
    break;
case 'Friday':
    message = "Short work day.";
    break;
case 'Saturday':   
    message = "Good shabes."
    break;     
    case 'Sunday':
        message = "Free day aboard.";
        break;
        default:
            message = "Invalid day!.";
   }
   return message;
}
let dayOfWeek = getDayMessage("Sunday")
console.log(dayOfWeek);
//////Complex Conditions:
//Write a function named checkEligibility that takes two parameters, age and isStudent.
//Inside the function, use a series of if-else statements to check the following:
//If age is less than 18 and isStudent is true, return "You are a minor student."
//If age is less than 18 and isStudent is false, return "You are a minofunr non-student."
//If age is between 18 and 24 and isStudent is true, return "You are a young adult student."
//If age is between 18 and 24 and isStudent is false, return "You are a young adult non-student."
//If age is 25 or older and isStudent is true, return "You are an adult student."
//If age is 25 or older and isStudent is false, return "You are an adult non-student."

function chekEligibility(age,isStudent) {
    if (age < 18 && isStudent === true) console.log("You are a minor");
    else if (age < 18 && isStudent === false) console.log("You are a minofunr non-student");
else if (age > 18 && age < 24 && isStudent === true) console.log("You are a young adult student");
else if ( age > 18 && age < 24 && isStudent === false )console.log("You are a young adult non-student");
else if ( age >= 25 && isStudent === true )console.log("You are an adult student.");
else if ( age >= 25 && isStudent === false )console.log("You are an adult non-student.");
}
chekEligibility(27,true);
//////////////
//String Comparison and Manipulation:
//Write a function named formatName that takes one parameter, name.

//Inside the function, use trim() to remove any leading or trailing whitespace from the name.
//Use toLowerCase() to convert the name to lowercase.
//Check if the formatted name is equal to "admin":
//If true, return "Welcome, Admin!"
//Else, return "Hello, name!"

function formatName(name) {
    let trimmedName = name.trim();
    let toLowerCase = trimmedName.toLowerCase();
    if (formatName === "admin") console.log("Welcome, admin!");
    else console.log("hello, ", name);
}
formatName("admin");
formatName("Liav");

////////////////////////////////////
//Nested If Statements:
//Write a function named checkDiscount that takes two parameters, age and isMember.
//Inside the function, use nested if statements to determine the discount:
//If age is less than 18:
//If isMember is true, return "You get a 20% discount."
//Else, return "You get a 10% discount."
//If age is 65 or older:
//If isMember is true, return "You get a 30% discount."

//Else, return "You get a 20% discount."
//If age is between 18 and 64:
//If isMember is true, return "You get a 10% discount."
//Else, return "No discount available."

function checkDiscount(age, isMember) {
    if (age < 18) {
        if (isMember === true) {
            return "You get a 20% discount.";
        } else {
            return "You get a 10% discount.";
        }
    } else if (age >= 65) {
        if (isMember === true) {
            return "You get a 30% discount.";
        } else {
            return "You get a 20% discount.";
        }
    } else if (age >= 18 && age < 65) {
        if (isMember === true) {
            return "You get a 10% discount.";
        } else {
            return "No discount available.";
        }
    }
}

// דוגמאות לבדיקות
console.log(checkDiscount(15, true));  // אמור להחזיר "You get a 20% discount."
console.log(checkDiscount(15, false)); // אמור להחזיר "You get a 10% discount."
console.log(checkDiscount(70, true));  // אמור להחזיר "You get a 30% discount."
console.log(checkDiscount(70, false)); // אמור להחזיר "You get a 20% discount."
console.log(checkDiscount(30, true));  // אמור להחזיר "You get a 10% discount."
console.log(checkDiscount(30, false)); // אמור להחזיר "No discount available."

//Write a function named validateLogin that takes two parameters, username and password.
//Inside the function, create a variable storedUsername and assign it a string value representing the correct username.
//Create a variable storedPassword and assign it a string value representing the correct password.
//Use an if-else statement to check:
//If username is equal to storedUsername and password is equal to storedPassword, return "Login successful."
//Else, return "Invalid username or password."

function validateLogin(username , password) {
const storedUsername = "corectuserName";
const storedPassword = "corectPassword";
if (username === storedUsername && storedPassword === password)   
    return "Login successful"; 
else "Login invalid"
}
console.log(validateLogin("corectuserName" , "corectPassword"));

//// Substring Extraction:
//  Write a function named extractInitials that takes two parameters, firstName and lastName.

//  Inside the function, use the charAt and toUpperCase methods to extract the first letter of each name and convert them to uppercase.
//  Return a string that combines the initials with a dot in between, like "J.D."

function extractInitials(FirstName,LastName) {
//הגדרת שמות הפרמטרים
FirstName = "liav";
LastName = "ben shimon";
//הגדרת משתנים  ושליפת האות הראשונה של כל שם והפיכתה לאות גדולה
let initialsFirtsName = FirstName.charAt(0).toUpperCase();
let initialsLastName = LastName.charAt(0).toUpperCase();
// הדפסת המשתנים
console.log(initialsFirtsName + " " + initialsLastName);
}
//קריאה לפונקציה והזנת ערכי הפרמטרים
extractInitials("liav","ben shimon");

////String Replacement:
//Write a function named maskEmail that takes one parameter, email.
//Inside the function, use the replace method to replace the part of the email before the "@" symbol with "*****".
//Return the masked email.
  
// יצירת פונקציה מסקמייל והזנת פרמטר מייל
function maskEmail(email) {
    let myemail = "liav1232111@email.com";
    let newemail = myemail.replace("liav1232111" , "*****");
    console.log (newemail);
    }
    maskEmail();
    
    /////Nested If-Else:

    function gradeCalculator(score) {
        if (score >= 90) return "A";
        else if (score >= 80) return "B";
        else if (score >= 70) return "C";
        else if (score >= 60) return "D";
        else return "F"
    }
    console.log(gradeCalculator(85));

    /// Complex Boolean Conditions:

    function convertToUpperCaseAndAddAge(name , age) {
        let newname = name.toUpperCase();
        let strage = age.toString();
let result = newname + strage;
return result;
    }
    console.log(convertToUpperCaseAndAddAge("liav",27));

    //Capitalize First Letter:

    function capitalize (word) {
       let newWord = word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
       return newWord;
    }
    console.log(capitalize("leomessi"));

    // Check Substring:
//Write a function named containsSubstring that takes two parameters, mainString and subString.
//Inside the function, check if mainString contains subString.
//Return true if it does, otherwise return false.

function containsSubstring(mainString , subString) {
return mainString.includes(subString);
}
console.log(containsSubstring("Good, Morning" , "Good"));
console.log(containsSubstring("Good Morning" , "Hey World"));

////
