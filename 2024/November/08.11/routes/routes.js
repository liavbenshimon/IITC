// routes/userRoutes.js
import express from "express";
import { createUser, getUsers, getUserById, updateUser, deleteUser } from "../controllers/userController.js";

const router = express.Router();

// Define routes for CRUD operations
router.post("/", createUser);               // Create a new user
router.get("/", getUsers);                  // Get all users
router.get("/:id", getUserById);            // Get user by ID
router.put("/:id", updateUser);             // Update user by ID
router.delete("/:id", deleteUser);          // Delete user by ID

export default router;
