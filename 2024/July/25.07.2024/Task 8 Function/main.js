
//1:

function greet() {
    console.log(`Hello World!`);
};
greet();

// 2:

function square(number) {
   return number * number;
  };
let result = square(4);
console.log(result);

//3:

function even(number1) {
    if  (number1 % 2 === 0) {
     console.log(true); 
    } else console.log(false);;  
    };
even(1);

//4:
function getFullName(firstName , LastName) {
getFullName = ` ${firstName} ${LastName}`
    console.log(getFullName);
};
getFullName("liav" , "ben shimon");
//5:
function sumTwo(num1 , num2) {
    sum = num1 + num2;
    console.log(sum);
}
sumTwo(2,3);
//6:
function multiply(num11 , num22) {
    return num11 * num22;
}
console.log( multiply(2,5));


//7.
function greetPerson (name) {
name = `Hello, ${name} ! `
console.log(name); 
};
greetPerson("liav");

//8.
function getAbsoluteValue (number123) {
    if (number123 < 0) {
       return -number123; 
    } else return number123;
    }
console.log(getAbsoluteValue(-6));

//9.
function calculateAverage(num_1 , num_2) {
let average  =  (num_1 + num_2)/2;
return (average);
};
console.log(calculateAverage(10,6));

//10.
function convertToUppercase(str) {
return str.toUpperCase();
};
console.log(convertToUppercase("liav"));
//11.

function isPositive(numberPositive) {
    if (numberPositive > 0) {
        return true
    } else if (numberPositive === 0) {
        return "Zero";
    }else  return false;
}
console.log(isPositive(8));
//12.


function getFirstChar(stringchar) {
    return stringchar[0];
};
let firstChar = getFirstChar("liav");
console.log(firstChar);

//13.

function areaOfRectangle(width,height) {
    let sunRE = (width*height)/2;
    return sunRE;
}
console.log(areaOfRectangle(10,2));

//14.
function remainderDivision(params) {
    
}
















