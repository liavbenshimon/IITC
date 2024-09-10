  
//1)
// for (let i = 0; i <= 20; i++){
//     console.log(i);
//    }
//2)        
// let i = 1
// while (i <= 15){
// console.log(i);
// i+=2
// };

//3)

// let num;
// do {
//   num = parseInt(prompt(`writh a number between 1 - 10`))
// } while (num > 10 || num < 1);
  



//4)

// let sum = 0;
// for (let i = 1; i <= 100; i++){
// sum = sum + i
// }
// console.log(sum);
 

// 5)
// i = 10
// while (i > 0) {
//     console.log(i);
//     i--;
// }

// 6)

// let first = 1;
// let second = 1;
// for (let i = 0;i < 10 ;i++){ // לולאה שמבצעת 10 איטרציות
// console.log(first); // הדפסת המספר הנוכחי
// let nextNumber = first + second; // חישוב המספר הבא בסדרה
// first = second // עדכון a לערך של b
// second = nextNumber // // עדכון b למספר הבא שחושב
// };

// 7)
// let cube;
// do {
// cube = Math.floor(Math.random()*6)+1;
// console.log(cube);
// } while (cube !== 3);

// 8)
// let counter = 7;
//  for (let i = 1; i <= 10; i++){
//      console.log(`${counter} * ${i} = ${counter * i}`);
//  }

// 9)
// let i = 1001
// while (i % 3 === 0 && i % 7 === 0) {
//     console.log(i);
// }
//10
// let num = 5;
// let factorial = 1;
// for (let i = 1; i <= num; i++){
// factorial *= i;
// };
// console.log(factorial);
//

// 11)
// let guess; 
// const secretNumber = Math.floor(Math.random() * 20) +1;

// do {
//     guess = parseInt(prompt(`Guess a number between 1-20`));
//     if (guess > 20 || guess < 1) console.log("Out of range");
//     else if (guess < secretNumber) console.log(`Try higher number`);
//     else if (guess > secretNumber) console.log(`Try lower number`);
    
// } while (guess !== secretNumber)
// console.log(`congratulations ! you guessed the right number : ${secretNumber}`);

// 12)
// let num = 31;
// let isPrime = true;
// for (let i = 2; i <= Math.sqrt(num); i++){
// if (num % i === 0) {
//      isPrime = false;
//      break;
// }
// };
// if (isPrime) { console.log(`${num} is prime number ` );
// } else console.log("The number is not prime number");


// 14)

// for (let i = 1; i <= 5; i++){
//     let row = ` `;
// for (let j = 1; j <= i; j++){
// row = row + i;
// }
// console.log(row);
// }

//15 calculator
let operators = prompt(`Choose operatos : +,-,*,/`);
let num1 = prompt(`Choose a  number`);
let num2 = prompt(`Choose a number`);  
let result;
do {
switch (operators) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
    break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
    default:
        console.log(`Result:${result}`);
        break;
}

} while (calculator);




