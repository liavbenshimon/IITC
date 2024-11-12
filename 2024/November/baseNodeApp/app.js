const express = require ('express');
const mongoose = require ('mongoose');
const dotenv = require('dotenv').config()

const userRoute = require ('./Route/userRoute.js')

const router = express.Router();

const PORT = 3000;
const dbURI = process.env.DB_URI

const app = express();
app.use(express.json());
router.use('/users', userRoute);

mongoose.connect(dbURI).then(() => {
    console.log("DB connected");
})

app.use('/users', userRoute);

app.get("/", (req,res) => {
    res.send ("hello world")
});

app.listen(PORT ,() => {
console.log(`The server is running on ${PORT}`);
});