import express from "express";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// File paths
const JOKES_PATH = path.join(__dirname, "db", "jokes.json");
const USERS_PATH = path.join(__dirname, "db", "users.json");
const PRODUCTS_PATH = path.join(__dirname, "db", "products.json");

app.use(express.json());

// Helper function to read JSON files
async function readJSONFile(filePath) {
    try {
        const data = await fs.readFile(filePath, "utf8");
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
        throw error;
    }
}

// Helper function to write JSON files
async function writeJSONFile(filePath, data) {
    try {
        await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error(`Error writing file ${filePath}:`, error);
        throw error;
    }
}

// Jokes Routes
app.get("/api/jokes/random", async (req, res) => {
    try {
        const jokes = await readJSONFile(JOKES_PATH);
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        res.json(randomJoke);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get("/api/jokes/:id", async (req, res) => {
    try {
        const id = +req.params.id;
        const jokes = await readJSONFile(JOKES_PATH);
        const joke = jokes.find(joke => joke.id === id);
        
        if (joke) {
            res.json(joke);
        } else {
            res.status(404).json({ error: "Joke not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

app.post("/api/jokes", async (req, res) => {
    try {
        const jokes = await readJSONFile(JOKES_PATH);
        const newJoke = {
            id: jokes.length > 0 ? Math.max(...jokes.map(joke => joke.id)) + 1 : 1,
            ...req.body
        };
        jokes.push(newJoke);
        await writeJSONFile(JOKES_PATH, jokes);
        res.status(201).json({ message: "New joke added", joke: newJoke });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

app.patch("/api/jokes/:id", async (req, res) => {
    try {
        const id = +req.params.id;
        const jokes = await readJSONFile(JOKES_PATH);
        const jokeIndex = jokes.findIndex(joke => joke.id === id);
        
        if (jokeIndex !== -1) {
            jokes[jokeIndex] = { ...jokes[jokeIndex], ...req.body, id };
            await writeJSONFile(JOKES_PATH, jokes);
            res.json({ message: "Joke updated", joke: jokes[jokeIndex] });
        } else {
            res.status(404).json({ error: "Joke not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

app.delete("/api/jokes/:id", async (req, res) => {
    try {
        const id = +req.params.id;
        const jokes = await readJSONFile(JOKES_PATH);
        const jokeIndex = jokes.findIndex(joke => joke.id === id);
        
        if (jokeIndex !== -1) {
            const deletedJoke = jokes.splice(jokeIndex, 1)[0];
            await writeJSONFile(JOKES_PATH, jokes);
            res.json({ message: "Joke deleted", joke: deletedJoke });
        } else {
            res.status(404).json({ error: "Joke not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// Users Routes
app.get("/api/users/random", async (req, res) => {
    try {
        const users = await readJSONFile(USERS_PATH);
        const randomUser = users[Math.floor(Math.random() * users.length)];
        res.json(randomUser);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get("/api/users/:id", async (req, res) => {
    try {
        const id = +req.params.id;
        const users = await readJSONFile(USERS_PATH);
        const user = users.find(user => user.id === id);
        
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

app.post("/api/users", async (req, res) => {
    try {
        const users = await readJSONFile(USERS_PATH);
        const newUser = {
            id: users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1,
            ...req.body
        };
        users.push(newUser);
        await writeJSONFile(USERS_PATH, users);
        res.status(201).json({ message: "New user added", user: newUser });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

app.patch("/api/users/:id", async (req, res) => {
    try {
        const id = +req.params.id;
        const users = await readJSONFile(USERS_PATH);
        const userIndex = users.findIndex(user => user.id === id);
        
        if (userIndex !== -1) {
            users[userIndex] = { ...users[userIndex], ...req.body, id };
            await writeJSONFile(USERS_PATH, users);
            res.json({ message: "User updated", user: users[userIndex] });
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

app.delete("/api/users/:id", async (req, res) => {
    try {
        const id = +req.params.id;
        const users = await readJSONFile(USERS_PATH);
        const userIndex = users.findIndex(user => user.id === id);
        
        if (userIndex !== -1) {
            const deletedUser = users.splice(userIndex, 1)[0];
            await writeJSONFile(USERS_PATH, users);
            res.json({ message: "User deleted", user: deletedUser });
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// Products Routes
app.get("/api/products/random", async (req, res) => {
    try {
        const products = await readJSONFile(PRODUCTS_PATH);
        const randomProduct = products[Math.floor(Math.random() * products.length)];
        res.json(randomProduct);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get("/api/products/:id", async (req, res) => {
    try {
        const id = +req.params.id;
        const products = await readJSONFile(PRODUCTS_PATH);
        const product = products.find(product => product.id === id);
        
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

app.post("/api/products", async (req, res) => {
    try {
        const products = await readJSONFile(PRODUCTS_PATH);
        const newProduct = {
            id: products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 1,
            ...req.body
        };
        products.push(newProduct);
        await writeJSONFile(PRODUCTS_PATH, products);
        res.status(201).json({ message: "New product added", product: newProduct });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

app.patch("/api/products/:id", async (req, res) => {
    try {
        const id = +req.params.id;
        const products = await readJSONFile(PRODUCTS_PATH);
        const productIndex = products.findIndex(product => product.id === id);
        
        if (productIndex !== -1) {
            products[productIndex] = { ...products[productIndex], ...req.body, id };
            await writeJSONFile(PRODUCTS_PATH, products);
            res.json({ message: "Product updated", product: products[productIndex] });
        } else {
            res.status(404).json({ error: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

app.delete("/api/products/:id", async (req, res) => {
    try {
        const id = +req.params.id;
        const products = await readJSONFile(PRODUCTS_PATH);
        const productIndex = products.findIndex(product => product.id === id);
        
        if (productIndex !== -1) {
            const deletedProduct = products.splice(productIndex, 1)[0];
            await writeJSONFile(PRODUCTS_PATH, products);
            res.json({ message: "Product deleted", product: deletedProduct });
        } else {
            res.status(404).json({ error: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});