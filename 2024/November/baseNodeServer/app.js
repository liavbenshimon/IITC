const express = require ('express');
const mongoose = require ('mongoose');
const dotenv = require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3000;
const dbURI = process.env.DB_URI

// Routes Import
const userRoute = require('./Route/userRoute.js')

mongoose.connect(dbURI).then(() => {
    console.log("DB connected");
})

// Middleware setup
app.use(express.json());

// Routing
app.get("/", (req,res) => {
    res.send ("hello world")
});

app.use('/api/users', userRoute);

app.listen(PORT ,() => {
console.log(`The server is running on ${PORT}`);
});