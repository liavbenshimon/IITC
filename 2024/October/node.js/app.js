import express, { response } from "express";

const app = express();
const PORT = 3000;

import jokes from "./db/jokes.json" assert {type: "json"};
import users from "./db/users.json" assert {type: "json"};
import products from "./db/products.json" assert {type: "json"};

app.use(express.json())

//Route to get a random joke
app.get("/api/jokes/random", (req, res) => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.send(randomJoke);
});

//Get joke by ID 
app.get("/api/jokes/:id", (req, res) => {
    const id = +req.params["id"];

    const data = jokes.find((joke) => joke.id === id);

    if (data) {
        res.send(data); 
    } else {
        res.send({ error: "This joke ID does not exist" }); 
    }
});

//Add new jokes
app.post("/api/jokes", (req, res) => {
    const newJoke = req.body
    jokes.push(newJoke)
    res.send({
        message: "new joke addes",
        joke: newJoke
    });
});

//Route to get a random user
app.get("/api/users/random", (req, res) => {
    const randomusers = users[Math.floor(Math.random()*users.length)]
    res.send(randomusers);
});

//Get user by ID 
app.get("/api/users/:id", (req, res) => {
    const id = +req.params["id"];

    const data = users.find((user) => user.id === id);

    if (data) {
        res.send(data); 
    } else {
        res.send({ error: "This user ID does not exist" }); 
    }
});

//Add new user
app.post("/api/users", (req, res) => {
    const newUsers = req.body
    users.push(newUsers)
    res.send({
        message: "new user addes",
        user: newUsers
    });
});

//Route to get a random product
app.get("/api/products/random", (req, res) => {
    const randomproducts = products[Math.floor(Math.random()*products.length)]
    res.send(randomproducts);
});

//Get product by ID 
app.get("/api/products/:id", (req, res) => {
    const id = +req.params["id"];

    const data = products.find((product) => product.id === id);

    if (data) {
        res.send(data); 
    } else {
        res.send({ error: "This product ID does not exist" }); 
    }
});

//Add new product
app.post("/api/products", (req, res) => {
    const newProducts = req.body
    products.push(newProducts)
    res.send({
        message: "new user addes",
        user: newProducts
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });