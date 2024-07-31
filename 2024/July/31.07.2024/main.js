        
// //*
// function palindromCheck (str){

//     let isPalindrom = true;
//     let lastPalindrom = str.length -1;
    
//     for (let i = 0; i < str.length/2; i++) {
       
//     if (str.i !== str[lastPalindrom-1]) {
//         isPalindrom = false;
//         break;
//     }
    
//             }
//       return isPalindrom;      
//         }
    
//     console.log(palindromCheck ("radar"));
    
    
//     // detrmine 
//     let car ={
//         make : "nissan",
//         model : "pseder",
//         year : 2024
//     };
//     console.log(car.make,car.model);
//     car.year = 2025;
//     console.log(car.year);

    //exercise 3
    //  let fruies = {
    //     name:"apple",
    //     color:"blue",
    //     sweetness: 10
    //  };
    //  console.log(fruies.sweetness , fruies.name);
    //  fruies.colorcolor = "black";
    //  console.log(fruies.color);
//exercis 4
// let book = {
//     title:" narnia",
//     author: "fistuk ",
//     pages: 120,
// }
// console.log(book.title,book.author);
// book.pages = 70;
// console.log(book.pages);

// let newBook = {
//     title:" hari bari",
//     author: "sasha ",
//     pages: 200
// };
// // console.log(newBook.title,newBook.author);
// let animal = {
//     species: "aaa ",
//     sound: "bb",
//     isWild: "sss"
// };
// console.log(animal.species,animal.sound);
// animal.isWild = "lolo";
// console.log(animal.isWild);
//Practice Time
//1.1
let car = {
    make: "Mazda ",
    model: 232,
    year: 2002,
    insurance: function () {
                console.log(`${this.make} ${this.model} ${this.year}`);
    }
    };
//1.2
console.log(car.model);
//1.3
car.year = 2024;
console.log(car[`year`]);
//1.4
car.color = `balck`;
console.log(car.color);
//1.5 -  I pushed function to the objec
//1.6
// שימוש במתודה מפתחות אובייקטים
let pap = Object.keys(car);
console.log(car);
// For loop
for (let i = 0; i < pap.length; i++) { 
        console.log(`${pap[i]}: ${car[pap[i]]}`);
}
//1.7
let person = {
    name: "liav",
    age: 27,
    city: " NY"
};
//1.8
let ad = Object.keys(person);

for (i = 0; i<ad.length;i++){
console.log(`${ad[i]}:${person[ad[i]]}`);
};
//



