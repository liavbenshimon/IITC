import Joke from '../models/jokeModel.js';

// Logic to get all jokes
async function getAllJokes(req, res) {
  try {
    const jokes = await Joke.find();
    res.json(jokes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Logic to get a joke by ID
async function getJokesByID(req, res) {
  res.json(res.joke);
}

// Middleware to find a joke by ID
async function getJoke(req, res, next) {
  let joke;
  try {
    joke = await Joke.findById(req.params.id);
    if (joke == null) {
      return res.status(404).json({ message: 'Joke not found' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.joke = joke;
  next();
}

// Logic to create a new joke
async function createNewJoke(req, res) {
  const joke = new Joke({
    setup: req.body.setup,
    punchline: req.body.punchline,
  });
  try {
    const newJoke = await joke.save();
    res.status(201).json(newJoke);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Logic to update a joke
async function updateAJoke(req, res) {
  if (req.body.setup != null) {
    res.joke.setup = req.body.setup;
  }
  if (req.body.punchline != null) {
    res.joke.punchline = req.body.punchline;
  }
  try {
    const updatedJoke = await res.joke.save();
    res.json(updatedJoke);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Logic to delete a joke
async function deleteJoke(req, res) {
  try {
    await res.joke.remove();
    res.json({ message: 'Deleted Joke' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Exporting functions and middleware
export {
  getAllJokes,
  getJokesByID,
  getJoke,
  createNewJoke,
  updateAJoke,
  deleteJoke
};







