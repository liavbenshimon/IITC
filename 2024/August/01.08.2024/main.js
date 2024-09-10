// // multiplicatiob table
// let row = ``;
// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         row += `${j*i} ` ;
//     };
//     row += `\n`
// }
// console.log(row);



/*//Exercise 8: Character Frequency (bonus, require objects)
Objective: Write a program to find the frequency of each character in a string.
Instructions:
Take a string as input.
Use nested loops to count the frequency of each character.
Print each character and its frequency.
*/
function countLetters (str) {
    let wow = {};
    
    for (let i = 0; i < str.length; i++) {
    let counter = 0;

    for (let j = 0; j < str.length; j++) {
        if (str[i] === str[j]) {
            counter ++;
        }
    }
    wow = {...wow , [str[i]]:counter}
    }
  console.log(wow);
}
countLetters("hlelllol","by");