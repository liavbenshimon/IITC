const express = require ('express');
const mongoose = require ('mongoose');
require('dotenv').config()

const PORT = 3000;
const dbURI = process.env.DB_URI

const app = express();

mongoose.connect(dbURI).then(() => {
    console.log("DB connected");
    
})

app.get("/", (req,res) => {
    res.send ("hello world")
});

app.listen(PORT ,() => {
console.log(`The server is running on ${PORT}`);
});






















