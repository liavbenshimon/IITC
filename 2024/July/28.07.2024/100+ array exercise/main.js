//1) empty array called fruits
let fruits = [];

//2)
let numbers = [ 1, 2 , 3 , 4, 5 ];

//3)
let colors = [ "red", "green", "blue"];

//4)
let mixed = [ 5 , "five" , "isItFive"];

//5)
let season = [ "Summer" , "Spring" , "Winter" , "Fall"];

//--------------------------------------------------------------------------------------------
//6
console.log(numbers.length);

//7)
let emptyCheck = [];
if (emptyCheck.length === 0) {
    console.log("its empty");
}else 
console.log("the array isnt empty");

//8)
let dynamic = [1,2,3,4,5]
console.log(dynamic.length);

//9)
dynamic.push(6);
console.log(dynamic);

//10)
dynamic.pop(6);
console.log(dynamic);

////////////////////////////////////////////////////////////////////////

//11)
console.log(colors[0]);

//12)
let lastseason = season[season.length -1]; 
console.log(lastseason);

//13)
let middlindex = Math.floor(numbers.length/2);
console.log(numbers);
console.log(numbers[middlindex]);

//14)
console.log(fruits[2]);

//15)
let printTheSecondColor = colors[2];
console.log("the second color is"+ " " + printTheSecondColor);

////Modifying Elements

//16)

fruits[0] = `apple`;
console.log(fruits);

//17)
numbers[numbers.length -1] = 6;
console.log(numbers); 

//18)
numbers[2] = numbers[2]*2;
console.log(numbers);

//19)
for (let i = 0; i < colors.length; i++) {
     colors[i] = colors[i].toUpperCase();
}
console.log(colors);

//20)
 
let firstElement = season[0];
let lastElement


