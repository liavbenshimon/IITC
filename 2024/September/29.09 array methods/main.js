// const password = ["Abcdsdf","1f3agfa","5434323","homepas"]
// const abc = "abcdefghijklmnopqrstuvwxyz"
// const numbers = [1,2,3,4,5,6,7,8,9]
// const result = password.some(combine){
// combine 
// }
// console.log(result);



// const products = [
//     { name: 'Laptop', price: 4000, quantity: 10 },
//     { name: 'Smartphone', price: 2000, quantity: 5 },
//     { name: 'Headphones', price: 150, quantity: 0 }, // This product is out of stock
//     { name: 'Monitor', price: 800, quantity: 7 },
//     { name: 'Keyboard', price: 100, quantity: 3 },
//     { name: 'Smartwatch', price: 1800, quantity: 0 } // Another product out of stock
//   ];

//   const res = products.find(firstOutOfStock => firstOutOfStock.quantity === 0)
  
// console.log(res);

// const students = [
//     { name: 'David', averageGrade: 85 },
//     { name: 'Sara', averageGrade: 90 },
//     { name: 'Michael', averageGrade: 85 },
//     { name: 'John', averageGrade: 75 },
//     { name: 'Anna', averageGrade: 90 },
//     { name: 'Ben', averageGrade: 95 }
//   ];

// const isTheBestGrade = students.sort((a,b) => {
//     return b.averageGrade -a.averageGrade
// })
// console.log(isTheBestGrade);




//HW

//1)
// const numbers = [1,2,3,4,5];
// const res = numbers.forEach((num)=>{
//     return num;
// })
// console.log(numbers);

//2)
// const numbers = [1,2,3,4,5];
// const res = numbers.forEach((num)=>{
//     return num;
// })
// console.log(numbers);

//3)
// const numbers = [1,2,3,4,5];
// const acc = [];
// const res = numbers.forEach((num)=>{
//     return acc.push(num**2);

// })
// console.log(acc);

//4)
// const numbers = [1,2,3,4,5];
// let sum = 0;
// const result = numbers.forEach( (num) => {
//     return sum+=num
// });
// console.log(sum);

//5
// const str = ['Hello', ' ', 'World', '!'];
// let buli = ` `;
// const concat = str.forEach((string)=>{
//     return buli+=string
// });
// console.log(buli);

// 6
// const numbers = [1,2,3,4,5];
// const doubled = numbers.map( (num) => {
//     return num**2
// });
// console.log(doubled);

// 7
// const fruits = ["apple","banana","cherry"];
// const string = fruits.map( (str) => {
//     return `The length of ${str} is ${str.length}`; 
// });
// console.log(string);

// 8
// const squareRoot = [1,4,16,25]
// const result = squareRoot.map(root => Math.sqrt(root))
// console.log(result);

// 9
// const newStr = ["hello","world"];
// const toUpperCase = newStr.map( str => str.toUpperCase()).join(" "); // option A
// const finalStr = toUpperCase.join(" "); //// option B
// console.log(toUpperCase);

// 10
// const boolian =[true,false,true];
// const opposite = boolian.map((reverse)=>{
//     return !reverse;
// });
// console.log(opposite);

// 11
// const numbers = [1,2,3,4,5,6,7,8];
// const even = numbers.filter(str => str % 2 === 0);
// console.log(even);


// 12
// const fruits = ["apple","banana","cherry","strawberry","pear","peach"];
// const selectionByLength = fruits.filter( str => str.length > 5)
// console.log(selectionByLength);

// 13

// const numbers = [1,2,3,4,5,6,7,8];
// const even = numbers.filter(str => str > 5);
// console.log(even);

// 14
// const fruits = ["apple","banana","cherry","strawberry","pear","peach"];
// const startWith = fruits.filter( str => str.startsWith("ap"));
// console.log(startWith);

// 15
// const numbers = [1,2,3,4,5,6,7,8];
// const even = numbers.filter((_,index) => index % 2 === 0);
// console.log(even);

// 16
// const numbers = [1,2,3,4,5,6,7,8];
// const even = numbers.reduce((acc,num)=>{
//     return acc += num;
// },0);
// console.log(even);

// 17
// const numbers = [1,2,3,4,5];
// const even = numbers.reduce((acc,num)=>{
//     return acc *= num;
// },1);
// console.log(even);

// 18
// const numbers = [1,2,3,4,5,6,7,8];
// const even = numbers.reduce((acc,num)=>{
//     return Math.max(acc,num);
// },0);
// console.log(even);

// 19
// const string = [`hello`,`world`,`!`]
// const join = string.reduce((acc,str)=>{
//     return acc + str;
// },"")
// console.log(join);

// 20
// const num = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
// const quantity = num.reduce((acc,num) => {
//      acc[num] = (acc[num] || 0) + 1;
//      return acc; 
// },{});
// console.log(quantity);

// 21
// const number = [1,2,3,4,5];
// const count = number.some((num)=>{
//     return num > 3;
// });
// console.log(count);

// 22

// const number = [2,4,6,8,10];
// const even = number.every(num => num % 2 === 0)
// console.log(even);

// 23
// const fruits = ["apple","banana","cherry"];
// const upThanSixLetter = fruits.some((str) => {
//     return str.length > 6;
// });
// console.log(upThanSixLetter);

// 24
// const words = ['חתול', 'כלב', 'פיל'];
// const consonants = ['ב', 'ג', 'ד', 'ז', 'ח', 'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת'];

// const allStartWithConsonant = words.every(word => consonants.includes(word[0]));
// console.log(allStartWithConsonant); 

// 25
// const checkAnyTrurth = [false, false, true, false];
// const res = checkAnyTrurth.some((str) => {
//     return str
// });
// console.log(res);

// 26
// const number = [2,4,6,8,10];
// const upThanSix = number.find(num => num > 6);
// console.log(upThanSix);

// 27
// const number = [1,2,3,4,5,6];
// const checkTheFirstEvenIndex = number.findIndex(num => num % 2 === 0);
// console.log(checkTheFirstEvenIndex);

// 28
// const fruits = ["apple","banana","cherry"];
// const upThanFiveLetter = fruits.find((str) => {
//     return str.length > 5;
// });
// console.log(upThanFiveLetter);

// 29
// const fruits = ["apple","banana","cherry"];
// const cherryIndex = fruits.findIndex((str) => {
//     return str === "cherry" ;
// });
// console.log(cherryIndex);

// 30
// const number = [1,2,-3,4,5,-6];
// const checkNegativ = number.find((num)=>{
//     return num < 0; 
// });
// console.log(checkNegativ);

// 31
// const numbers =  [3, 1, 4, 1, 5, 9, 2, 6, 5];
// const  ascendingOrder = numbers.sort((a,b) => a-b );
// console.log(ascendingOrder);

// 32
// const fruits = ["apple", "banana", "cherry", "strawberry", "grape", "orange", "peach"];
// const azFrutis = fruits.sort();
// console.log(azFrutis);

//  33 
// const numbers =  [3, 1, 4, 1, 5, 9, 2, 6, 5];
// const  descendingOrder = numbers.sort((a,b) => b-a );
// console.log(descendingOrder);

// 34
// const fruits = ["apple", "banana", "cherry", "strawberry", "grape", "orange", "peach"];
// const azFrutis = fruits.sort((a,b)=>a.length-b.length);
// console.log(azFrutis);

// 35
// const nameAndAge = [{name: 'יוחנן', age: 25}, {name: 'יעל', age: 30}, {name: 'בועז', age: 20}];
// const sortByAge = nameAndAge.sort((a,b) => a.age-b.age);
// console.log(sortByAge);

// 36
// const randomArray =  [1, [2, 3], [4, [5, 6]]];
// const flatIt = randomArray.flat(2);
// console.log(flatIt);

// 37
// const newArray = [1, [2, [3, [4]]]];
// const flatByTwo = newArray.flat(2);
// console.log(flatByTwo);

// 38
// const arrayWithHoles = [1, 2, , 4, 5];
// const flattenedArray = arrayWithHoles.flat();
// console.log(flattenedArray);

// 39
// const az =  ['א', ['ב', 'ג'], 'ד'] 
// const res = az.flat()
// console.log(res);

// 40
// const randomArray =  [1, [2, 3], [4, [5, 6]]];
// const flatIt = randomArray.flat(Infinity);
// console.log(flatIt);

// 41
// const letters = ['א', 'ב', 'ג', 'ד'];

// letters.forEach((letter, index) => {
//     console.log(`Index: ${index}, Value: ${letter}`);
// });

// 42
// const arr = [10, 20, 30, 40];
// const result = arr.map((value, index) => {
//     return { index: index, value: value };
// });

// console.log(result);
 
// 43






