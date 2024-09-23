"use strict";

// const student_1 = {
//   name: "John",
//   age: 17,
//   grades: {},
// };


// const product_1 = {
//   name: "Phone",
//   categories: ["electronics"],
//   isAvailable: false,
// };


// const myProducts = [
//   { name: "Laptop", price: 1000, categories: ["electronics", "computers"] },
//   { name: "Shirt", price: 500, categories: ["clothing"] },
//   { name: "Phone", price: 4200, categories: ["electronics", "gadgets"] },
// ];


// const students = [
//   { id: 1, name: "Alice", age: 20 },
//   { id: 2, name: "Bob", age: 22 },
//   { id: 3, name: "Charlie", age: 19 },
// ];


// const strings = [
//   "ageArray",
//   "my success",
//   "no more lives",
//   "and of session",
//   "good discussion",
// ];


// 😅 Task 1: Update Student Age 😅
// TODO: Write a function to update the student's age (You can mutate the original object)
function updateAge(student, newAge) {
student.age = newAge;
}
updateAge(student_1, 18);
// console.log("Updated Student:", student_1);


// 😅 Task 2: Add Product Category 😅
// TODO: Write a function to add a new category to the product (You can mutate the original object)
function addCategory(product, category) {
product.categories.push(category)
}
addCategory(product_1, "gadgets");
// console.log("Updated Product:", product_1);


// 😅 Task 3: Check Product Availability 😅
// TODO: Write a function to check if the product is available (return true if available, false otherwise)
function isProductAvailable(product) {
if (product.isAvailable === true) {
    return true;
}
else  return false;
}
// const isAvailable = isProductAvailable(product_1);
// console.log("Is Product Available:", isAvailable);


// 🙂 Task 4: Find Product by Name 🙂
// TODO: Write a function to find a product by name
function findProductByName(products, productName) {
for (let i = 0;  i < products.length; i++) {
    if (products[i].name === productName) {
        return products[i]
    } 
    }
    return null
}
// const foundProduct = findProductByName(myProducts, "Phone");
// console.log("Found Product:", foundProduct);


// 🙂 Task 5: Count Products in Category 🙂
// TODO: Write a function to count the number of products in a category
function countProductsInCategory(products, category) {
let count = 0;
for ( let i = 0; i < products.length; i++) {
    if (products[i].categories.includes(category)){
        count++
    }
}
return count
}
// const count = countProductsInCategory(myProducts, "electronics");
// console.log("Products in Electronics:", count);



// 🙂 Task 6: Get Student Ages 🙂
// TODO: Write a function to get an array of student ages
function getStudentAges(studentsAge) {
    let ages = [];
    for ( let i = 0; i < studentsAge.length; i++) {
        ages.push(studentsAge[i].age)
    }
    return ages
}
const agesofStudents = getStudentAges(students);
// console.log("Student Ages:", agesofStudents);



// 🤨 Task 7: Get Products by Category 🤨
// TODO: Write a function to get products by category
function getProductsByCategory(products, category) {
    let productNames = [];
    for ( let i = 0; i < products.length; i++) {
        if (products[i].categories.includes(category)) {
            productNames.push(products[i].name)
        }
    }
    return productNames
}

// const electronics = getProductsByCategory(myProducts, "electronics");
// console.log("Electronics Products:", electronics);



// 🤨 Task 8: Get Average product prices 🤨
// TODO: Write a function to get the average price of all products
function getAveragePrice(products) {
    let sumAvg = 0;
    let count = 0;
for (let i = 0; i < products.length; i++)
    if (products[i].price){
        sumAvg += products[i].price
        count++
    }
    if (count > 0){
    let avg = sumAvg/count
    return avg;
    }
    else {
        return 0
    }
}

// const averagePrice = getAveragePrice(myProducts);
// console.log("Average Price:", averagePrice);




// 🤨 Task 9: Add Grade to Student 🤨
// TODO: Write a function to add a grade to a student (You can mutate the original object)
function addGrade(student, subject, grade) {
  student[subject] = grade
}
addGrade(student_1, "math", 85);
// console.log("Updated Student:", student_1);







// 😥 Task 10: Count Occurrences of a Character 😥
// TODO: Write a function to count the occurrences of the character 's'
function countCharacterOccurrences(strings, char) {
    let count = 0;
    for (let i = 0; i < strings.length; i++) {
        let currentStr = strings[i];
        for (let j = 0; j < currentStr.length; j++){
            if (currentStr[j] === char) {
                count++
            }
        }
    }
return count;
}   
// const s_count = countCharacterOccurrences(strings, "s");
// const c_count = countCharacterOccurrences(strings, "c");
// console.log("Occurrences of 's':", s_count);
// console.log("Occurrences of 'c':", c_count);






// 😥 Task 11: Update Product Price by Name 😥
// TODO: Write a function to update the price of a product by name (You can mutate the original object)
function updatePriceByName(products, productName, newPrice) {
 for (let i = 0; i < products.length; i++){
    if (products[i].name === productName) {
        products[i].price = newPrice;
        return products[i];
    }
 }
 return null;
}
const changePrice = updatePriceByName(myProducts,"Laptop",2000)
// console.log(changePrice)



// const strings = [
//     "ageArray",
//     "my success",
//     "no more lives",
//     "and of session",
//     "good discussion",
//   ];







// 😥 Task 12: Get Uppercase Strings 😥
// TODO: Write a function to get an array of uppercase strings (You should return a new array)
function getUppercaseStrings(strings) {
return strings.map(str => str.toUpperCase())
}
// const uppercaseStrings = getUppercaseStrings(strings);
// console.log("Uppercase Strings:", uppercaseStrings);



// const strings = [
//     "ageArray", 0
//     "my success", 1
//     "no more lives", 2
//     "and of session", 2
//     "good discussion", 1
//   ];
  


// 🥵 Task 13: group strings by spaces occurences 🥵
// TODO: Write a function to group strings by the number of spaces in the string.
// The function should return an object where keys are the number of spaces and values are arrays of strings.

function groupStringsBySpaces(strings) {
let numOfSpaces = {};
    for (let i = 0; i < strings.length; i++){
        let count = 0;
        let currentString = strings[i];
        for (let j = 0; j < currentString.length; j++){
            if (currentString[j] === " ") {
                count++
            }
        }
        if (!numOfSpaces[count]) {
            numOfSpaces[count] = [];
        }
        numOfSpaces[count].push(currentString);
    }
    return numOfSpaces;
}


// const groupedStrings_1 = groupStringsBySpaces(strings);
// console.log("Grouped Strings By Spaces:", groupedStrings_1);




// const strings = [
//     "ageArray", 8
//     "my success", 10
//     "no more lives", 13 
//     "and of session", 14 
//     "good discussion", 15 
//   ];

// 🥵 Task 14: group strings by length 🥵
//TODO: Write a function to group strings by length.
// The function should return an object where keys are the length of the strings and values are arrays of strings.


function groupStringsByLength(strings) {
    let strByLength = {};
    for (let i = 0; i < strings.length; i++){
        let currentString = strings[i];
        let length = currentString.length;
        if (!strByLength[length]) {
            strByLength[length] = [];
        }
        strByLength[length].push(currentString)
    }
    return strByLength;
}
// const groupedStrings_2 = groupStringsByLength(strings);
// console.log("Grouped Strings By Length:", groupedStrings_2);


// 🥵 Task 15: Capitalize Strings 🥵
// TODO: Write a function to capitalize the first letter of each string in the array (You should return a new array)
// Bonus: Capitalize the first letter of each word in the string (split by space)
function capitalizeStrings(strings) {
 return strings.map(str => str.charAt(0).toUpperCase() + str.slice(1))
}


// const capitalizedStrings = capitalizeStrings(strings);
// console.log("Capitalized Strings:", capitalizedStrings);














































"use strict";


const student_1 = {
  name: "John",
  age: 17,
  grades: {},
};


const product_1 = {
  name: "Phone",
  categories: ["electronics"],
  isAvailable: false,
};


const myProducts = [
  { name: "Laptop", price: 1000, categories: ["electronics", "computers"] },
  { name: "Shirt", price: 500, categories: ["clothing"] },
  { name: "Phone", price: 4200, categories: ["electronics", "gadgets"] },
];


const students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 19 },
];


const strings = [
  "baba",
  "my success",
  "no more lives",
  "and of session",
  "good discussion",
];


// 😅 Task 1: Update Student Age 😅
// TODO: Write a function to update the student's age (You can mutate the original object)
function updateAge(student, newAge) {
newAge =student.age
}
updateAge(student_1, 18);
// console.log("Updated Student:", student);


// 😅 Task 2: Add Product Category 😅
// TODO: Write a function to add a new category to the product (You can mutate the original object)
function addCategory(product, category) {

}


addCategory(product_1, "gadgets");
// console.log("Updated Product:", product);


// 😅 Task 3: Check Product Availability 😅
// TODO: Write a function to check if the product is available (return true if available, false otherwise)
function isProductAvailable(product) {
  if (product.isAvailable === true) {
console.log(`True, the product is availble`);
  } else return false;
}


const isAvailable = isProductAvailable(product_1);
// console.log("Is Product Available:", isAvailable);


// 🙂 Task 4: Find Product by Name 🙂
// TODO: Write a function to find a product by name
function findProductByName(products, productName) {
  
}


const foundProduct = findProductByName(myProducts, "Phone");
// console.log("Found Product:", foundProduct);


// 🙂 Task 5: Count Products in Category 🙂
// TODO: Write a function to count the number of products in a category
function countProductsInCategory(products, category) {
  
}


const count = countProductsInCategory(myProducts, "electronics");
// console.log("Products in Electronics:", count);


// 🙂 Task 6: Get Student Ages 🙂


// TODO: Write a function to get an array of student ages
function getStudentAges(students) {
  // your code here
}


const ages = getStudentAges(students);
// console.log("Student Ages:", ages);


// 🤨 Task 7: Get Products by Category 🤨
// TODO: Write a function to get products by category
function getProductsByCategory(products, category) {
  // your code here
}


const electronics = getProductsByCategory(myProducts, "electronics");
// console.log("Electronics Products:", electronics);


// 🤨 Task 8: Get Average product prices 🤨
// TODO: Write a function to get the average price of all products
function getAveragePrice(products) {
  // your code here
}


const averagePrice = getAveragePrice(myProducts);
// console.log("Average Price:", averagePrice);


// 🤨 Task 9: Add Grade to Student 🤨
// TODO: Write a function to add a grade to a student (You can mutate the original object)
function addGrade(student, subject, grade) {
  // your code here
}


addGrade(student_1, "math", 85);
// console.log("Updated Student:", student_1);


// 😥 Task 10: Count Occurrences of a Character 😥
// TODO: Write a function to count the occurrences of the character 's'
function countCharacterOccurrences(strings, char) {
  // your code here
}


const s_count = countCharacterOccurrences(strings, "s");
const c_count = countCharacterOccurrences(strings, "c");
// console.log("Occurrences of 's':", s_count);
// console.log("Occurrences of 'b':", c_count);


// 😥 Task 11: Update Product Price by Name 😥
// TODO: Write a function to update the price of a product by name (You can mutate the original object)
function updatePriceByName(products, productName, newPrice) {
  // your code here
}


// 😥 Task 12: Get Uppercase Strings 😥
// TODO: Write a function to get an array of uppercase strings (You should return a new array)
function getUppercaseStrings(strings) {
  // your code here
}


const uppercaseStrings = getUppercaseStrings(strings);
// console.log("Uppercase Strings:", uppercaseStrings);


updatePriceByName(myProducts, "Phone", 550);
// console.log("Updated Products:", products);


// 🥵 Task 13: group strings by spaces occurences 🥵
// TODO: Write a function to group strings by the number of spaces in the string.
// The function should return an object where keys are the number of spaces and values are arrays of strings.


function groupStringsBySpaces(strings) {
  // your code here
}


const groupedStrings_1 = groupStringsBySpaces(strings);
// console.log("Grouped Strings By Spaces:", groupedStrings_1);


// 🥵 Task 14: group strings by length 🥵
//TODO: Write a function to group strings by length.
// The function should return an object where keys are the length of the strings and values are arrays of strings.


function groupStringsByLength(strings) {
  // your code here
}


const groupedStrings_2 = groupStringsByLength(strings);
// console.log("Grouped Strings By Length:", groupedStrings);


// 🥵 Task 15: Capitalize Strings 🥵
// TODO: Write a function to capitalize the first letter of each string in the array (You should return a new array)
// Bonus: Capitalize the first letter of each word in the string (split by space)
function capitalizeStrings(strings) {
  // your code here
}


const capitalizedStrings = capitalizeStrings(strings);
// console.log("Capitalized Strings:", capitalizedStrings);






















































