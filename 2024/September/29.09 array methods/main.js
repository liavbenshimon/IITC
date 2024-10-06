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
// const fruits = ["אננס","אבטיח","בננה","תפוח"];
// const res = fruits.filter(str=>str.includes("א"));
// console.log(res);
 
// 44
// const fruits = ['א', 'ב', 'א', 'ג', 'ב', 'א'];
// const res = fruits.reduce( (acc,letter) => {
//     acc[letter] = (acc[letter] || 0) + 1;
//     return acc;
// },{})

// console.log(res);

// 45
// const check = ["שלום","עולם",`ג'אווה סקריפט`];
// const res = check.some(letter => letter.includes("ז"));
// console.log(res);

// 46
// const numbers = [2,4,6,8];
// const res = numbers.every(num => num % 2 === 0);
// console.log(res);

// 47
// const users = [{id: 1, status: 'לא פעיל'}, {id: 2, status: 'פעיל'}];
// const res = users.find(str => str.status === "פעיל");
// console.log(res);

// 48
// const numbers = [3, 7, -2, 9, -5];
// const res = numbers.findIndex(num => num < 0);
// console.log(res);

// 49
// const languages = ['JavaScript', 'Python', 'Ruby', 'Java'];
// const res = languages.sort((a,b) => b.length-a.length);
// console.log(res);

// 50

// const flatNumbers = [1, [2, [3]], [4, [5]]];
// const result = flatNumbers.flat(1)
// console.log(result);

// 51
// const hello =  ['ש', 'ל', 'ו', 'ם'];
// let word = ` `;
// const res = hello.forEach(str => {
//     word += str;
// });
// console.log(word);

// 52
// const numbers = [1,2,3,4,5];
// const multipliedByTen = numbers.map(num => num + 10)
// console.log(multipliedByTen);

// 53
// const numbers = [1,2,3,4,5,6,7,8,9];
// const dividedByThree = numbers.filter(num => num % 3 === 0);
// console.log(dividedByThree);

// 54
// const words = ['קצר', 'בינוני', 'הכי ארוך', 'ארוך יותר'];
// const shortestWord = words.reduce((acc,str) => {
//     return str.length > acc.length? str : acc;
// },words[0]);
// console.log(shortestWord);

// 55
// const numbers = [1, 3, 5, 7, 9];
// const check = numbers.some(num => num % 2 === 0)
// console.log(check);

// 56
// const fruits = ['תפוח', 'תפ', 'תפוז'];
// const startCheck = fruits.every(str => str.startsWith("תפ"));
// console.log(startCheck);

// 57
// const users = [{id: 1, completed: false}, {id: 2, completed: true}];
// const completedCheck = users.find(str => str.completed === true);
// console.log(completedCheck);

// 58
// const fruits = ['תפוח', 'בננה', 'דובדבן'];
// const res = fruits.findIndex(str => str.includes("בננה"));
// console.log(res);

// 59
// const names = [{name: 'יוחנן', age: 25}, {name: 'יעל', age: 30}, {name: 'בועז', age: 20}];
// const sortByName = names.sort((a,b) => a.name.localeCompare(b.name));
// console.log(sortByName);

// 60
// const numbers = [1, [2, 3], [4, [5, 6]]];
// const flat =numbers.flat(2);
// console.log(flat);

// 61
// const greeting = 'שלום';
// greeting.split("").forEach(char => console.log(char));

// 62
// const fruits = ['תפוח', 'בננה', 'דובדבן'];
// const char = fruits.map((char) => {
//     return char.charAt(0);
// });
// console.log(char);

// 63
// const strings = ['א', 'אב', 'אבג', 'אבגד'];
// const strThree = strings.filter(str => str.length > 3);
// console.log(strThree);

// 64
// const fruits = ['תפוח', 'בננה', 'דובדבן'];
// const count = fruits.reduce((acc,current) =>{
//    acc += current.length
//    return acc
// },0);
// console.log(count);

// 65
// const string = ['שלום', 'עולם', "ג'אווהסקריפט"];
// const upThanTen = string.some(str => str.length > 10);
// console.log(upThenTen);

// 66
// const numbers = [10,20,30,40,50];
// const biggerThanThirty = numbers.every(num => num > 5);
// console.log(biggerThanThirty);

// 67
// const string = ['ספר', 'דלת', 'חלון']
// const findChar = string.find(char => char.includes("ו"));
// console.log(findChar);

// 68
// const numbers = [5, 10, 15, 20];
// const res = numbers.findIndex(num => num > 10);
// console.log(res);

// 69
// const string = ['אאא', 'בב', 'ג'];
// const res = string.sort((a,b) => a.length - b.length);
// console.log(res);

// 70
// const flatByThree = [1, [2, [3, [4]]]];
// const res = flatByThree.flat(3);
// console.log(res);

// 71


