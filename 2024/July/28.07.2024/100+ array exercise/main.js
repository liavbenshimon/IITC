
// // 1)fruits
//  const fruits = ["apple", "banana", "pineapple", "grape"];


// // 2)
// let numbers = [ 1, 9 , 3 , 4, 5 ,1 ,9 ];

// // //3)
// let colors = [ "red", "green", "blue"];

// // //4)
// let mixed = [ 5 , "five" , "isItFive"];

// // //5)
// let season = [ "Summer" , "Spring" , "Winter" , "Fall"];

// // //6)
// let unknown = [false,0,NaN,`wow`,`benefit`];

// // 7)
// const products = [
//     { id: 1, name: "Apple", category: "Fruit", price: 0.5, quantity: 50 },
//     { id: 2, name: "Banana", category: "Fruit", price: 0.3, quantity: 100 },
//     { id: 3, name: "Milk", category: "Dairy", price: 1.2, quantity: 30 },
//     { id: 4, name: "Bread", category: "Bakery", price: 2.0, quantity: 20 },
//     { id: 5, name: "Carrot", category: "Vegetable", price: 0.4, quantity: 75 }]
// //--------------------------------------------------------------------------------------------
// //6
// console.log(numbers.length);

// //7)
// let emptyCheck = [];
// if (emptyCheck.length === 0) {
//     console.log("its empty");
// }else 
// console.log("the array isnt empty");

// //8)
// let dynamic = [1,2,3,4,5]
// console.log(dynamic.length);

// //9)
// dynamic.push(6);
// console.log(dynamic);

// //10)
// dynamic.pop(6);
// console.log(dynamic);

// ////////////////////////////////////////////////////////////////////////

// //11)
// console.log(colors[0]);

// //12)
// let lastseason = season[season.length -1]; 
// console.log(lastseason);

// //13)
// let middlindex = Math.floor(numbers.length/2);
// console.log(numbers);
// console.log(numbers[middlindex]);

// //14)
// console.log(fruits[2]);

// //15)
// let printTheSecondColor = colors[2];
// console.log("the second color is"+ " " + printTheSecondColor);

// ////Modifying Elements

// //16)

// fruits[0] = `apple`;
// console.log(fruits);

// //17)
// numbers[numbers.length -1] = 6;
// console.log(numbers); 

// //18)
// numbers[2] = numbers[2]*2;
// console.log(numbers);

// //19)
// for (let i = 0; i < colors.length; i++) {
//      colors[i] = colors[i].toUpperCase();
// }
// console.log(colors);

// //20)
 
// let firstElement = season[0];
// season [0] = season[season.length -1];

// season[season.length-1] = firstElement
// console.log(season);

// //////Array Methods: push() and pop()
// //21)
// fruits.push("orange","Mmelon")
// console.log(fruits);

// //22)
// numbers.pop(4);
// console.log(numbers);

// //23)
// colors.push("grey" , "pink" , "yellow");
// console.log(colors);

// //24)
// let pushnumbers = [];
// for (let i = 0; i <= 5; i++) {
//     pushnumbers.push(i);
//     }
//     console.log(pushnumbers);

//  //25)
//     let list = [1,2,3,4,5];
// for (i= list.length; i > 0; i--) {
//     let poppednum = list.pop();
//     console.log(poppednum);
// }

// //26)
// fruits.unshift("mango");
// console.log(fruits);

// //27)
// numbers.shift(1);
// console.log(numbers);

// //28)
// numbers.unshift(5,6,7);
// console.log(numbers);

// //29) לבדוק עם מישה ו בכיתה
// let numberlist = [];
// for (i=1;i<=5;i++ ){
//     numberlist.unshift(i);
// }
// console.log(numberlist);

// //30)
// let ridel = [1,2,3,4,5];
// let len = ridel.length;
// for ( i = 0; i< len;i++ ){
//     console.log(ridel.shift());
// }
// //31)
// console.log(colors);
// console.log(colors.indexOf("GREEN"));
// //32)
// console.log(season);
// console.log(season.indexOf("Winter"));
// //33)
// console.log(colors.push("red"));
// console.log(colors.lastIndexOf("RED"));
// console.log(colors);
// //34)
// let newArray = ["do","me","fa","do"];
// console.log(newArray.indexOf("do"));
// console.log(newArray.lastIndexOf("do"));
// //35)
// let isItExist = newArray.indexOf("me") === -1 ? false:true;
// console.log(isItExist);
// //36)
// console.log(fruits);
// console.log(fruits.includes("apple"));
// //37)
// console.log(numbers);
// console.log(numbers.includes(10));
// //38)
// console.log(colors);
// let newColor = (colors.length)/2;
// console.log(colors.includes("blue",newColor));
// //39)
// function checkSpecificValue(str) {
//     str="leti"
//     if (str.includes()) {
//         return true;
//     }return false;
// };
// console.log(checkSpecificValue("l"));
// //40)
// console.log(fruits.includes("apple"))
// let fruitcheck = "banana";
// console.log(fruits.includes(fruitcheck)?`${fruitcheck} is in the list.`:`${fruitcheck} is not in the list`);

// //41)
// console.log(numbers);
// let getThree = numbers.slice(0,3)
// console.log(getThree);
// //42)
// console.log(colors);
// let negativeSlice = colors.slice(-2)
// console.log(negativeSlice);
// //43)
// console.log(season);
// let getseasons = season.slice(0,3);
// console.log(getseasons);
// //44)
// console.log(fruits);
// let newbew = fruits.slice();
// console.log(fruits);
// //45)
// console.log(numbers);
// let numElm = 3;
// let startIndex = (numbers.length - numElm)/2;
// let endIndex = numbers.length - startIndex;
// let middelIndex = numbers.slice(startIndex,endIndex);
// console.log(middelIndex);
// //46)
// console.log(fruits);
// let midIndex = Math.floor(fruits.length-1)/2
// fruits.splice(midIndex,2)
// console.log(fruits);
// //47)
// console.log(numbers);
// let replaceNum = numbers.splice(2,3,9,9,9)
// console.log(numbers);
// //48)
// console.log(colors);
// let addColor = colors.splice(3,0,"brown");
// console.log(colors);
// //49)
// console.log(fruits);
// let newFruit = fruits.splice(0,1,"apple","banana")
// console.log(fruits);
// //50)
// let cleanFruit = fruits.splice(0,fruits.length)
// console.log(fruits);
// //51)
// console.log(fruits);
// console.log(colors);
// let mix = fruits.concat(colors);
// console.log(mix);
// //52)
// let chain = fruits.concat(season).concat(colors);
// console.log(chain);
// //53)
// console.log(fruits);
// let add = fruits.concat("apple");
// console.log(add);
// //54)
// console.log(mixed);
// let newmixed = mixed.concat(mixed);
// console.log(newmixed);
// //55)
// console.log(numbers);
// let newNum = numbers.concat(7,7,7);
// console.log(newNum);
// //56)
// let result = colors.join();
// console.log(colors);
// // 57)
// let join = numbers.join("-");
// console.log(join);
// // 58)
// function joinArray (string,saperator) {
// return string.join(saperator);
// };
// const saperate = joinArray(["hello","world"],"-");
// console.log(saperate);
// //59)
// let joinArr = [];
// joinArr.join("h","e","l","l","o")
// console.log(joinArr);
// //60)
// let numbersorder = ["good","morning","wonderful","world"]
// let abc = numbersorder.join(" ");
// console.log(abc);
// let sigi = abc.split(" ");
// console.log(sigi);
// //61)
// console.log(season);
// let reverse = season.reverse();
// console.log(reverse);
// //62)
// function palindrom (word) {
// let startPal = word.split("");
// let midPal = startPal.reverse();
// let endPal = midPal.join("");
// if (word === endPal){
// return "This string is a palindrom"
// } else {
// return "This string is not a palindrome";
// }
// }
// const isItPalindrom = palindrom("cbc")
// console.log(isItPalindrom);

// //63)

// console.log(numbers);
// let reversNum = numbers.reverse();

// function square (num) {
//     return num*num;
// };
// let firstMap = numbers.map(square);
// console.log(firstMap);

// //64)

// let dongo = "barbi";
// let splitName = dongo.split("");
// let reverseName = splitName.reverse();
// console.log(reverseName);

//65)

// function reverseArray (startSwap){
// for (let i = 0; i<startSwap.length/2;i++){
// let temp = startSwap[i];
// startSwap[i] = startSwap[startSwap.length-1-i];
// startSwap[startSwap.length-1-i] = temp;
// }
// return startSwap;
// }
// let take = reverseArray(["l","i","A","v"]);
// console.log(take);

//66)
// let komo = fruits;
// fruits.sort();
// console.log(komo);

// //67)
// let ascendinOrder = numbers;
// ascendinOrder.sort((a, b) => a-b)
// console.log(ascendinOrder);

// // 68)
// let descending = numbers;
// descending.sort((a, b) => b -a)
// console.log(descending);

// // 69)
// const fruits = ["apple", "banana", "pineapple", "grape"];

// fruits.sort((a,b)=>a.length - b.length);
// console.log(fruits);

// 70)
// numbers.sort((a,b)=>(a%3)-(b%3))
// console.log(numbers);

// 71)

// colors.forEach((color) => {
//   console.log(color);
// });

// 72)

// numbers.forEach((value,index,array)=> {
// array[index] = value *2;
//   })
// console.log(numbers);

// //73)

// function createHtmlList (array){
// let htmlList =`<u>`;

// array.forEach(function(item) {
//     htmlList += `<li>${item}</li>`
// });

// htmlList +=`<u>`;

// return htmlList;
// }
// const htmlOutPut = createHtmlList(fruits);
// console.log(htmlOutPut);

// 74)

// function searchNumbers(numbers) {
//     const result = [];

//     numbers.forEach(function(num) {
//         if (num > 5) {
//             result.push(num);
//         }
//     });
//     return result;
// }

// const match = searchNumbers(numbers);
// console.log(`The numers that bigger than five are:` ,match);


//75)

// let count = 0;

// fruits.forEach(function (display) {

//     display.split('').forEach(function(char){
//         if (char === 'a'){
//             count ++
//         }
//     })
// });
// console.log(`The letter "a" appears ${count} times in total`);

// 76)

// const lengthOfString = fruits.map((str)=>{
//    return str.length;
// })
// console.log(lengthOfString);
 
//77)

// const square = numbers.map((squareNumbers)=>{
//     return squareNumbers*squareNumbers
//     })                         
// console.log(square);

// 78)

// const checkIfEven = numbers.map((num)=>{
//     return num % 2 === 0
// })
// console.log(checkIfEven);

// 79)

// const names = [`Liav`,`Yoni`,`Roy`,`David`]
// const greeting = names.map((name)=>{
// return `Hello ${name}`
// });
// console.log(greeting);


// 80)

// const celsius = [18,20,32]; //celsius tempertures

// const convert = celsius.map((fahrenheit)=>{
//     return (fahrenheit * 9/5) + 32
// })
// console.log(convert);

//81
// const evenNumbers = numbers.filter((even)=>{
//     return even % 2 === 0;
// }) ;
// console.log(evenNumbers);

// 82)

// const five = fruits.filter((byLength)=>{
//     return byLength.length > 5
// });
// console.log(five);

// 83)

// const unique = numbers.filter((value)=>{
//     return numbers.indexOf(value) === numbers.lastIndexOf(value);;
// })
// console.log(unique);

// 84)
// const falsyValues = [false, 0, "", null, undefined, NaN];
// const fallsy = unknown.filter(num=> num );
// console.log(fallsy);

// 85)

// const exist = fruits.filter((app) => {
// return fruits.includes("apple");
// });
// console.log(exist);

// 86)
// const findNumber = numbers.find(num => num > 3)
// console.log(findNumber);


// 87)

// const firstColor = colors.findIndex((letter) => {
//     return letter.startsWith("b");
// });
// console.log(firstColor);

// 88)

// const primNumber = numbers.find((prim) => {
//     if (prim <= 1)  return false;
//     for (let i = 2; i < Math.sqrt(prim); i++){
//         if (prim % i === 0) return false;    
//     }
//     return true;
// });
// console.log(primNumber);

// 89)

// const targetSeason = "Winter"
// const itIsWinter = season.findIndex(check => check === targetSeason )
// console.log(itIsWinter);

// 90)

// const selectByCondition = colors.find((str) => {
//     if (str === "red") {
//     return true
// }
// });
// console.log(selectByCondition);

// 91)

// const evenCheck = numbers.some((num => num % 2 === 0))
// console.log(evenCheck);

// 92)

// const verify = fruits.every(str => str.length > 3)
// console.log(verify);


// 93)

// const checkIfNegative = numbers.some(num => num < 0)
// console.log(checkIfNegative);

// 94)

// const checkUnique = numbers.every((num,index) => {
//     numbers.indexOf(num) === index;
// });
// console.log(checkUnique);

// 95)

// const ifCharIexist = season.some((char)=>char.includes("i"))
// const hasAllI = season.every((char)=>char.includes("i"))
// console.log(ifCharIexist,hasAllI);

// 96)

// const sum = numbers.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
// })
// console.log(sum);

// 97)
// const longestWord = fruits.reduce((accumulator,currentValue)=>{
//     return currentValue.length > accumulator.length ? currentValue : accumulator
// })
//     console.log(longestWord);
    
// 98)

// const countOccurrences = numbers.reduce((count,currentValue) => {
//     count[currentValue] = (count[currentValue] || 0) + 1;
//     return count;
// },{}) 
// console.log(countOccurrences);

// const groupArrayOfObjects = products.reduce((accum,current) => {
// const category = current.category;
// if (!accum[category]){
//     accum[category] = [];
// }
// accum[category].push(current);
// return accum;
// },{});
// console.log(groupArrayOfObjects);


// 99)
// const nestyArray = [["apple", "banana", "cherry"],
// ["dog", "cat", "mouse"],
// ["red", "blue", "green"]];

// const names = nestyArray.reduce( (acc,cur) => {
//  return acc.concat(cur)
// },[])
// console.log(names);

// 100)

// const group = products.reduce((acc,cur)=>{
// if (!acc[cur.category]) {
//     acc[cur.category] = [];
// }
// acc[cur.category].push(cur);
// return acc
// },{});
// console.log(group);


















































































































