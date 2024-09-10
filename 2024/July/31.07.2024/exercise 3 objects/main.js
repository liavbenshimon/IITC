//exercis 3

//## Exercise 11: Playlist

//11.1
let Playlist = {
name:"Latino ",
song: ["cha cha","me gusta","vamos"],
duration: 78
};
 
//11.2
Playlist.song.push("Mi ritmo");
console.log(Playlist.song);
//11.3
let durationAverage = Playlist.duration / Playlist.song.length;
console.log(durationAverage);

//## Exercise 12: Bank Account
//12.1
let bankAcount = {

accountnNumber: "7463",
balance: 2000,
isActive: true,
//12.2
deposit: function (amount) {

    this.balance += amount;
    console.log(`Deposited:${amount}. New balance:${this.balance}`);
    },
    withDraw: function (withDraw) {
        this.balance -= withDraw;
        console.log(`whitdrawed:${withDraw}. New balance:${this.balance}`);
    }
};
bankAcount.deposit(100);
bankAcount.withDraw(200);
//Exercise 13: Circle
//13.1
let Circle = {
radius:20,
color:"Green",
// 13.2
calculateArea: function () {
    
}

};

















































































































































