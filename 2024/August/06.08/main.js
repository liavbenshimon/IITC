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
    student.age = newAge
}
updateAge(student_1, 18);
console.log("Updated Student:", student_1 );



// 😅 Task 2: Add Product Category 😅
// TODO: Write a function to add a new category to the product (You can mutate the original object)
function addCategory(product, category) {
  product.categories.push(category);
}
addCategory(product_1, "gadgets");
console.log("Updated Product:", product_1);


// 😅 Task 3: Check Product Availability 😅
// TODO: Write a function to check if the product is available (return true if available, false otherwise)
function isProductAvailable(product) {
    return product.isAvailable;
};
const result = isProductAvailable(product_1);
console.log(result);


// 🙂 Task 4: Find Product by Name 🙂
// TODO: Write a function to find a product by name
function findProductByName(products, productName) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].name === productName)
            return products[i]; 
    }
    return null;
}
let findName = findProductByName(myProducts, "Phone");
console.log(findName);


// 🙂 Task 5: Count Products in Category 🙂
// TODO: Write a function to count the number of products in a category


function countProductsInCategory(products, category) {
    let count = 0;
    for (let i = 0; i < products.length; i++) {
        if (products[i].categories.includes(category))
            count ++;
    }
    return count;
}

const abs = countProductsInCategory(myProducts, "electronics");
console.log("Products in Electronics:", abs);


// 🙂 Task 6: Get Student Ages 🙂


// TODO: Write a function to get an array of student ages
function getStudentAges(students) {
    let newList = [];
    for (let i = 0; i < students.length; i++) {
        newList.push(students[i].age)
    }
    return newList;
}
const ages = getStudentAges(students);
console.log("Student Ages:", ages);


// 🤨 Task 7: Get Products by Category 🤨
// const myProducts = [
//     { name: "Laptop", price: 1000, categories: ["electronics", "computers"] },
//     { name: "Shirt", price: 500, categories: ["clothing"] },
//     { name: "Phone", price: 4200, categories: ["electronics", "gadgets"] },
//   ];
  
// TODO: Write a function to get products by category
function getProductsByCategory(products, category){

// your code here

}
// const electronics = getProductsByCategory(myProducts, "electronics");
// console.log("Electronics Products:", electronics);


// 🤨 Task 8: Get Average product prices 🤨
// TODO: Write a function to get the average price of all products
function getAveragePrice(products) {
    let sum = 0;
  for (let i = 0; i < products.length; i++){
        sum = sum + products[i].price;    
    }
    const average =  sum/products.length;
    return average;
} 
const averagePrice = getAveragePrice(myProducts);
console.log("Average Price:", averagePrice);


// 🤨 Task 9: Add Grade to Student 🤨
// const student_1 = {
//     name: "John",
//     age: 17,
//     grades: {},
//   };
// TODO: Write a function to add a grade to a student (You can mutate the original object)
function addGrade(student, subject, grade) {
  student.grades[subject] = grade;
}
addGrade(student_1, "math", 85);
console.log("Updated Student:", student_1);


// 😥 Task 10: Count Occurrences of a Character 😥
// TODO: Write a function to count the occurrences of the character 's'
function countCharacterOccurrences(strings, char) {
let count = 0;
    for (let i = 0; i < strings.length; i ++){
           for (let j = 0;j < strings[i].length; j++){
            if (strings[i][j]===char){
                count ++
        }
    }
}
return count; 
} 
const s_count = countCharacterOccurrences(["strings","sos"], "s");
const c_count = countCharacterOccurrences(["irr","nir oz"], "r");
console.log("Occurrences of 's':", s_count);
console.log("Occurrences of 'r':", c_count);


// 😥 Task 11: Update Product Price by Name 😥
// const myProducts = [
//     { name: "Laptop", price: 1000, categories: ["electronics", "computers"] },
//     { name: "Shirt", price: 500, categories: ["clothing"] },
//     { name: "Phone", price: 4200, categories: ["electronics", "gadgets"] },
//   ];
// TODO: Write a function to update the price of a product by name (You can mutate the original object)
function updatePriceByName(products, productName, newPrice) {
for( let i=0; i < products.length; i++ ){
if (products[i].name === productName){
    products[i].price = newPrice
return products[i];
}
return null;
}
}
const newNameAndPrice = updatePriceByName (myProducts,"Laptop",2222)
console.log(`The new price of laptop is`, newNameAndPrice);

// 😥 Task 12: Get Uppercase Strings 😥
// TODO: Write a function to get an array of uppercase strings (You should return a new array)
function getUppercaseStrings(strings) {
  let newString = [];
  for (let i = 0; i<strings.length; i++){
    newString.push(strings[i].toUpperCase());
}
return newString;
}
const uppercaseStrings = getUppercaseStrings(strings);
console.log("Uppercase Strings:", uppercaseStrings);

// 🥵 Task 13: group strings by spaces occurences 🥵
// TODO: Write a function to group strings by the number of spaces in the string.
// The function should return an object where keys are the number of spaces and values are arrays of strings.
function groupStringsBySpaces(newstrings) {
  let groupString = {};
    for (let i = 0; i < newstrings.length; i++) {
        let countstr =  newstrings[i].split(" ").length -1;//ספירת הרווחים במחרוזת
    
    if (!groupString[countstr]){
        groupString[countstr] = [];//יצירת מפתח חדש במידה ולא קיים
}
groupString[countstr].push(newstrings[i]);    
}
return groupString;// החזרת האובייקט המקובץ
}
const groupedStrings_1 = groupStringsBySpaces(strings);
console.log("Grouped Strings By Spaces:", groupedStrings_1);


// 🥵 Task 14: group strings by length 🥵
//TODO: Write a function to group strings by length.
// The function should return an object where keys are the length of the strings and values are arrays of strings.

//1)writh a for loop in order to go over all the 
// 2)
// 
// 
// 
function groupStringsByLength(lengthStrings) {
    let sumStringLength={};
    for ( let i = 0; i < lengthStrings.length; i++ ){
    let calcLenght = lengthStrings[i].length;

    if (!sumStringLength[calcLenght]){
        sumStringLength[calcLenght] = [];
}
sumStringLength[calcLenght].push(lengthStrings[i]);
}
return sumStringLength;
}
const groupedStrings_2 = groupStringsByLength(strings);
console.log("Grouped Strings By Length:", groupedStrings_2);

// 🥵 Task 15: Capitalize Strings 🥵
// TODO: Write a function to capitalize the first letter of each string in the array (You should return a new array)
// Bonus: Capitalize the first letter of each word in the string (split by space)
function capitalizeStrings(capital) {
    let capStr = [];
    for ( let i = 0; i < capital.length; i++){
    let firstCap = capital[i].charAt(0).toUpperCase()+capital[i].slice(1);
    capStr.push(firstCap);
    }
return capStr;
}


const capitalizedStrings = capitalizeStrings(strings);
console.log("Capitalized Strings:", capitalizedStrings);




