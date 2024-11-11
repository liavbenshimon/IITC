// app.js
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import requestLogger from "./middleware/logger.js";

const URI = "mongodb+srv://liav2:43tC9kwEj9fIbe2z@cluster0.k19ik.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(requestLogger);

// Connect to MongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch(error => console.error("Failed to connect to MongoDB Atlas:", error));

// Use userRoutes for any paths starting with '/user'
app.use("/user", userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
