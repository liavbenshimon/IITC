const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const usersRoutes = require("./Routes/usersRoutes.js")

dotenv.config()
const app = express();
app.use(express.json());

const db_URI = process.env.DB_URI;
console.log("DB_URI: ", db_URI);

const PORT = process.env.PORT || 3000;

mongoose.connect(db_URI).then(() => {
    console.log('DB connected');
})
.catch((err) => {
    console.error('DB connection failed', err); 
});

app.use('/', usersRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


