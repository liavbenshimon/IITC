//1)
// Array of fruits
// const fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange", "Peach"];
// Array of vegetables
// const vegetables = ["Carrot", "Broccoli", "Spinach", "Potato", "Tomato", "Cucumber"];
// Array of Car brands
//  const cars = ["Toyota", "Honda", "BMW", "Mercedes", "Ford", "Chevrolet"];

// //1
// console.log(...fruits);
// //2
// console.log(...fruits,...vegetables);
// //3
// console.log("pineapple",...fruits);
// //4
// console.log(...fruits,"pineapple");
// //5
// console.log(...fruits,...vegetables,...cars);
// //7
// const newFruits = [...fruits.slice(1)]
// console.log(newFruits);
// //8
// const carBrands = [...cars.slice(-3)]
// console.log(carBrands);
// //9
// const carBrandsRevers = [...cars.reverse()]
// console.log(carBrandsRevers);
// //10
// const replaceSecond = [...cars.slice(0,1),"Mazda",...cars.slice(2)]
// console.log(replaceSecond);

// //Practical Scenarios (Intermediate)
// //1
// const namee = "LIAV";
// console.log(...namee);
// //2
// const nestedArray = [1, 2, [3, 4], [5, 6], 7];
// const flattenedArray = [...nestedArray.flat()];
// console.log(flattenedArray)
// //3
// // const cars = ["Toyota", "Honda", "BMW", "Mercedes", "Ford", "Chevrolet"];
// const updateCars = cars.slice(0, -1);
// console.log(updateCars);
// 4
// console.log(...fruits.slice(0,2),"tomato",...fruits.slice(2));
// 5
// const arrayWithDuplicates = [1, 2, 3, 1, 4, 5, 3, 6];
// const uniqueArray = [...new Set(arrayWithDuplicates)];
// console.log(uniqueArray);
// 6
// const originalArray = [1, 2, 3, 4, 5, 6, 7];
// const middleElements = [...originalArray.slice(1, -1)];
// console.log(middleElements);
// 7
// const originalArray = [1, 2, 3, 4, 5];
// const reversedArray = [...originalArray].reverse();
// console.log(reversedArray);
// 8
// const array = [1, 2, 3, 4];
// const combinedArray = ["Hello", ...array];
// console.log(combinedArray);
// 9
// function mergeArrays(...args) {
//     return [].concat(...args);
//   }
  
//   const array1 = [1, 2, 3];
//   const array2 = [4, 5, 6];
//   const array3 = [7, 8, 9];
  
//   const mergedArray = mergeArrays(array1, array2, array3);
 
//   console.log(mergedArray);
// 10  
// function shuffleArray(array) {
//     const copiedArray = [...array];  // Create a copy of the array
//     return copiedArray.sort(() => Math.random() - 0.5);  // Shuffle the elements randomly
//   }
  
//   const originalArray = [1, 2, 3, 4, 5];
  
//   const shuffledArray = shuffleArray(originalArray);
  
//   console.log(shuffledArray);
  
//Spread Operator with Objects
// 1
// const dmy = [{
//     day: 27,
//     month: 11,
//     year: 2024
//   }];
// console.log(...dmy);

// 2
// Object 1: 
// const person = {
//     name: "John",
//     age: 30,
//     profession: "Developer"
//   };
  
//   // Object 2: 
//   const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020,
//     color: "blue"
//   };

// const mergObj = {...person,...car};
// console.log(mergObj);

// 3
// const car = {
//     make: "Honda",
//     model: "Civic",
//     year: 2022,
//     color: "Red"
//   };
  
// const updatecar = {...car,year:2024};
// console.log(updatecar);

// 4
// const car = {
//     make: "Honda",
//     model: "Civic",
//     year: 2022,
//     color: "Red"
//   };
  
// const updatecar = {...car,owner: "First" };
// console.log(updatecar);

//5
// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020,
//   };
  
//   const person = {
//     name: "John",
//     age: 30,
//     profession: "Developer",
//   };
  
//   const product = {
//     name: "Laptop",
//     brand: "Dell",
//     price: 1200,
//   };

//   const mergObject = {...car,...person,...product}
//   console.log(mergObject);
  
// 6
// const originalObject = {
//     name: "Alice",
//     age: 25,
//     profession: "Designer"
//   };
  
//   const copiedObject = { ...originalObject };
  
//   console.log(copiedObject);
  
// 7
// const person = {
//     name: "John",
//     age: 30,
//     profession: "Developer"
//   };
  
//   // Remove the 'age' property and create a new object
//   const { age, ...personWithoutAge } = person;
  
//   console.log(personWithoutAge);
  
// 8
// const person = {
//     name: "John",
//     age: 30,
//     profession: "Developer"
//   };
  
//   const updatedPerson = { ...person, name: "Liav", age: 25 };
  
//   console.log(updatedPerson);
  
// 9
// const person = {
//     name: "John",
//     age: 30,
//     profession: "Developer"
//   };
  
//   // Extract 'name' and create a new object with the rest
//   const { name, ...rest } = person;
  
//   console.log(name);   // John
//   console.log(rest);   // { age: 30, profession: "Developer" }
  
// 10
// const user = {
//     name: "Bob",
//     address: {
//       city: "New York",
//       zip: "10001"
//     }
//   };

//   const updatedUser = {
//     ...user,
//     address: {
//       ...user.address,
//       city: "Nahariya"
//     }
//   };

//   console.log(updatedUser);

