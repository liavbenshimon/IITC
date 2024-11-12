const express = require ('express');
const mongoose = require ('mongoose');
const dotenv = require('dotenv').config()

const userRoute = require ('./Route/userRoute.js')

const router = express.Router();

const PORT = 3000;
const dbURI = process.env.DB_URI

router.use('/users', userRoute);
const app = express();

mongoose.connect(dbURI).then(() => {
    console.log("DB connected");
})

app.use('/users', userRoute);
app.use(express.json());

app.get("/", (req,res) => {
    res.send ("hello world")
});

app.listen(PORT ,() => {
console.log(`The server is running on ${PORT}`);
});