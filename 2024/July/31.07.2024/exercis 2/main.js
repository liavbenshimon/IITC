        
// // 2.Base-object-exercise




    
    
    // exercise 2
    let car ={
        make : "nissan",
        model : "pseder",
        year : 2024
    };
    console.log(car.make,car.model);
    car.year = 2025;
    console.log(car.year);

    //exercise 3
     let fruies = {
        name:"apple",
        color:"blue",
        sweetness: 10
     };
     console.log(fruies.sweetness , fruies.name);
     fruies.colorcolor = "black";
     console.log(fruies.color);
//exercis 4
let book = {
    title:" narnia",
    author: "fistuk ",
    pages: 120,
}
console.log(book.title,book.author);
book.pages = 70;
console.log(book.pages);

// exercise 5
let animal = {
    species: "aaa ",
    sound: "bb",
    isWild: "sss"
};
console.log(animal.species,animal.sound);
animal.isWild = "lolo";
console.log(animal.isWild);

//exercise 6
 let smartphone = { brand:"iphon",model:"15 PRO MAX",storageGB:"256Gb"};
 console.log(smartphone.brand,smartphone.storageGB);
smartphone.model = "glaxy"; 
console.log(smartphone.model);

//exercise 7
let recipe = {
    name:"shakshuka",
    ingredient: [`salt`,`pepper`,`oil`],
    preperationTime:20
};
console.log(recipe.name,recipe[0]);
recipe.ingredient.push("cusbara");
console.log(recipe.ingredient);

// exercis 8
//8.1
let movie = {
title: "narnia",
director: "liav",
realeasYear: 2015
};
//8.2
console.log(movie.title,movie.director);
//8.3
realeasYear = 2018;
console.log(realeasYear);

// exercise 9 
//9.1
let country = {
    name: "israel",
    capital: "jerusalem",
    population: "9,000,000"
};
//9.2
console.log(country.name,country.capital);
//9.3
movie.population = "8,000,000";
console.log(movie.population);
//exercise 10
//10.1
let computer = {
    brand: "Dell",
    cpu: "i7",
    ram: "1T"
};
//10.2
console.log(computer.brand,computer.cpu);
//10.3
computer.ram = "2T";
console.log(computer.ram);














//Practice Time
//1.1
8.1
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



