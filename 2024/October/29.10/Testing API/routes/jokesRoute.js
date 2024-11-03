import express from "express"
import { getAllJokes, getJokesByID, createNewJoke, updateAJoke, deleteJoke } from "../controllers/jokesController.js"

const router = express.Router()

// Jokes Routes
router.get('/', getAllJokes);

router.get("/:id", getJokesByID) 

router.post("/", createNewJoke);

router.put("/:id",updateAJoke);

router.delete("/:id", deleteJoke);

export default router;