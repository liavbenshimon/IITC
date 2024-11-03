import Joke from "..models/jokeModel.js"

export const getAllJokes = router.get('/', async (req, res) => {
    try {
      const jokes = await Joke.find();
      res.json(jokes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  export const getJokesByID = router.get('/:id', getJoke, (req, res) => {
    res.json(res.joke);
  });
  
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

export const createNewJoke = router.post('/', async (req, res) => {
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
  });

  router.post('/', async (req, res) => {
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
  });

export const updateAJoke = router.put('/:id', getJoke, async (req, res) => {
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
  });

  export const deleteJoke = router.delete('/:id', getJoke, async (req, res) => {
    try {
      await res.joke.remove();
      res.json({ message: 'Deleted Joke' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  

  
  
  