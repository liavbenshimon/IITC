import express from "express"
import morgan from "morgan"
import dotenv from "dotenv"
import logRequest from "./middleware/logger.js"
import jokesRoutes from "./routes/jokesRoute.js"
import usersRoutes from "./routes/usersRoute.js"
import productsRoutes from "./routes/productsRoutes.js"
import mongoose from "mongoose"

dotenv.config();

mongoose.connect(`${process.env.URI}`).then(() => {
    console.log("Connected to DB");
})

// Routes Import

const app = express()
const PORT = 3000

// Middleware
app.use(express.json())
app.use(morgan("tiny"))
app.use(logRequest)

// Base Routes
app.get("/", (req, res) => {
    // res.render("index.html")
    res.send("Hello World!")
})

app.get("/api/status", (req, res) => {
    res.send({ message: "Server is UP" })
})

// Jokes
app.use("/api/jokes", jokesRoutes)
app.use("/api/users", usersRoutes)
app.use("/api/products", productsRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})