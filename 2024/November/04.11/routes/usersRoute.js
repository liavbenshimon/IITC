import express from "express"
import { getAllUsers, getUsersByID, createNewUser, updateAUser, deleteUser } from "../controllers/usersControllers.js"

const router = express.Router()

// Users Routes
router.get('/api/users', getAllUsers);

router.get("/api/users/:id", getUsersByID);

router.post("/api/users", createNewUser);

router.put("/api/users/:id",updateAUser);

router.delete("/api/users/:id", deleteUser);

export default router