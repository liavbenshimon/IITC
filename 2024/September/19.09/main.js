"use strict";

// Initial Data
const student = {
  name: "Jane",
  age: 18,
  scores: {},
};

const products = [
  { name: "tablet", price: 300, categories: ["electronics", "gadgets"] },
  { name: "shoes", price: 150, categories: ["clothing"] },
  { name: "headphones", price: 100, categories: ["electronics", "audio"] },
  { name: "book", price: 20, categories: ["books", "education"] },
];

// 😅 Easy Task 1: Update Student Name 😅
// TODO: Write a function to update the student's name (You can mutate the original object)
function updateName(student, newName) {
student.name = newName;
}

updateName(student, "Emma");
// console.log('Updated Student:', student);

// 😅 Easy Task 2: Add Product Price 😅
// TODO: Write a function to add a price to the product (You can mutate the original object)
function addPrice(product, price) {
product.price = price
}

addPrice(products[0], 350);
// console.log('Updated Product:', products[0]);

// 😅 Easy Task 3: Check if Student is Adult 😅
// TODO: Write a function to check if the student is 18 or older (return true if yes, false otherwise)
function isStudentAdult(student) {
  if (student.age === 18 || student.age > 18) {
}  
return ("yes he's adult");
}
// const isAdult = isStudentAdult(student);
// console.log('Is Student Adult:', isAdult);

// 🙂 Medium Task 4: Find Cheapest Product 🙂
// TODO: Write a function to find the product with the lowest price
function findCheapestProduct(products) {
  for (let i = 0; i < products.length; i++) {
    let lowestPrice = products[i].price
    // if (products[i] < products.price) {
        
    // }
    //Math.min(lowestPrice)
    // console.log(Math.min(lowestPrice));
    // for (let j = 0; j < lowestPrice.length; j++)
    // let lowestPrice = products[i].price;
    
    // lowestPrice.Math.min(lowestPrice)
    // console.log(products[i].price.Math.min(products[i]));
    }
}

// const cheapestProduct = findCheapestProduct(products);
// console.log('Cheapest Product:', cheapestProduct);

// 🙂 Medium Task 5: Count Products Under a Certain Price 🙂
// TODO: Write a function to count the number of products below a specified price
function countProductsUnderPrice(products, priceLimit) {
  let count = 0 
  for (let i = 0; i < products.length; i++)
    if (products[i].price < priceLimit)
        console.log(products[i].price);
}

// const countUnder50 = countProductsUnderPrice(products, 50);
// console.log('Products under 50:', countUnder50);

// 🙂 Medium Task 6: Add Score to Student 🙂
// TODO: Write a function to add a score to the student for a given subject (You can mutate the original object)
function addScore(student, subject, score) {
  student[subject] = score
}

// addScore(student, "math", 90);
// console.log('Updated Student:', student);

// 🥵 Hard Task 7: Get Products by Multiple Categories 🥵
// TODO: Write a function to get products that belong to all provided categories
function getProductsByCategories(products,category) {
    let productNames = [];
    for ( let i = 0; i < products.length; i++) {
        let productCategories = products[i].categories 
        for ( let j = 0; j < productCategories.length; j++){
        if (productCategories[j] === category) {
            productNames.push(products[i].name)
        }
        }
    }
        return productNames;
    }

// const electronicsAndAudio = getProductsByCategories(products, ["electronics", "audio"]);
// console.log('Products in Electronics and Audio:', electronicsAndAudio);

// 🥵 Hard Task 8: Calculate Total Price of Products 🥵
// TODO: Write a function to calculate the total price of all products
function calculateTotalPrice(products) {
let calc = 0;
for ( let i = 0; i < products.length; i++) {
    if (products[i].price) {
        calc += products[i].price
        calc++
        }
    }
    return calc
}

// const totalPrice = calculateTotalPrice(products);
// console.log('Total Price of Products:', totalPrice);

// 🥵 Hard Task 9: Capitalize Product Names 🥵
// TODO: Write a function to capitalize the first letter of each product name (return a new array)
function capitalizeProductNames(products) {
  for ( let i = 0; i < products.length; i++){
    let currentProduct = products[i];
    for (let j = 0; j < currentProduct.length; j++){
        currentProduct[j].charAt(0).toUpperCase();
    }
  }
}

const capitalizedProductNames = capitalizeProductNames(products);
console.log('Capitalized Product Names:', capitalizedProductNames);
