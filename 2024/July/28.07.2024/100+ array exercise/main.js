
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
season [0] = season[season.length -1];

season[season.length-1] = firstElement
console.log(season);

//////Array Methods: push() and pop()
//21)
fruits.push("orange")
console.log(fruits);

//22)
numbers.pop(4);
console.log(numbers);

//23)
colors.push("grey" , "pink" , "yellow");
console.log(colors);

//24)
let pushnumbers = [];
for (let i = 0; i <= 5; i++) {
    pushnumbers.push(i);
    }
    console.log(pushnumbers);

 //25)
    let list = [1,2,3,4,5];
for (i= list.length; i > 0; i--) {
    let poppednum = list.pop();
    console.log(poppednum);
}

//26)
fruits.unshift("mango");
console.log(fruits);

//27)
numbers.shift(1);
console.log(numbers);

//28)
numbers.unshift(5,6,7);
console.log(numbers);

//29) לבדוק עם מישה ו בכיתה
let numberlist = [];
for (i=1;i<=5;i++ ){
    numberlist.unshift(i);
}
console.log(numberlist);

//30)
let ridel = [1,2,3,4,5];
for ( i = 0; i<ridel.length ;i++){
    console.log(ridel.shift());
}
//31)
console.log(colors);
console.log(colors.indexOf("GREEN"));
//32)
console.log(season);
console.log(season.indexOf("Winter"));
//33)
console.log(colors.push("red"));
console.log(colors.lastIndexOf("RED"));
console.log(colors);
//34)
let newArray = ["do","me","fa","do"];








































































































































































































