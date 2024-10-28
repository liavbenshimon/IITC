// const express = require("express");
import express from "express"
const app = express();

const PORT = 3000;

//APP JOKE
app.get("/api/joke", (req, res) => {
    const randomJoke = jokes[Math.floor(Math.random()*jokes.length)]
    res.send(randomJoke);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


//APP USERS
app.get("/api/users", (req, res) => {
    const randomusers = users[Math.floor(Math.random()*users.length)]
    res.send(randomusers);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  
//APP productions
app.get("/api/productions", (req, res) => {
    const randomproductions = productions[Math.floor(Math.random()*productions.length)]
    res.sendrandom(productions);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  
const jokes = [
    { id: 1, setup: "Why don’t scientists trust atoms?", punchline: "Because they make up everything!" },
    { id: 2, setup: "What do you call fake spaghetti?", punchline: "An impasta!" },
    { id: 3, setup: "Why did the math book look sad?", punchline: "Because it had too many problems." },
    { id: 4, setup: "Why don’t skeletons fight each other?", punchline: "They don’t have the guts." },
    { id: 5, setup: "What do you call cheese that isn't yours?", punchline: "Nacho cheese!" },
    { id: 6, setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field!" },
    { id: 7, setup: "Why did the bicycle fall over?", punchline: "It was two-tired." },
    { id: 8, setup: "What does a cloud wear under his raincoat?", punchline: "Thunderwear." },
    { id: 9, setup: "How does a penguin build its house?", punchline: "Igloos it together!" },
    { id: 10, setup: "Why don’t eggs tell jokes?", punchline: "Because they might crack up." }
  ];
  

const users = [
  { id: 1, username: "CoolCat99" },
  { id: 2, username: "MightyMango" },
  { id: 3, username: "SkyWalker" },
  { id: 4, username: "PixelWizard" },
  { id: 5, username: "CaptainCode" },
  { id: 6, username: "NinjaNerd" },
  { id: 7, username: "TechTitan" },
  { id: 8, username: "JazzMaster" },
  { id: 9, username: "CyberSamurai" },
  { id: 10, username: "CosmicCoder" }
];

const productions = [
    { id: 1, title: "Starlight Symphony" },
    { id: 2, title: "Echoes of Eternity" },
    { id: 3, title: "Celestial Dreams" },
    { id: 4, title: "Whispers of the Wild" },
    { id: 5, title: "Harmony in the Mist" },
    { id: 6, title: "Fire and Frost" },
    { id: 7, title: "Legends Unfold" },
    { id: 8, title: "Voices of the Past" },
    { id: 9, title: "Journey to Dawn" },
    { id: 10, title: "Mystic Melodies" }
  ];
  



