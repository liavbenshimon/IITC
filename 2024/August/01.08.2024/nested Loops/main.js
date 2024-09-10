// //Exercise 3
// function triangle() {
//   for (let i = 1; i <= 3; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }
//     console.log(row);
//   }  
// } 
// triangle(2);

//Exercise 4

function grid3on3(g) {
    for (let i = 1; i <= g ; i++) {
        let row = " ";
     for (let j = 1; j <= g; j++) {
        row += (i*j) + " ";
    }   
    console.log(row);
}
}
grid3on3(3);
