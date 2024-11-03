import usersModel from "..models/usersModel.js"

export const getAllusers = router.get('/', async (req, res) => {
    try {
      const users = await usersModel.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  export const getUsersByID = router.get('/:id', getUser, (req, res) => {
    res.json(res.user);
  });
  
  async function getUser(req, res, next) {
    let user;
    try {
      user = await usersModel.findById(req.params.id);
      if (user == null) {
        return res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
    res.user = user;
    next();
  }

export const createNewUser = router.post('/', async (req, res) => {
    const user = new usersModel({
      setup: req.body.setup,
      punchline: req.body.punchline,
    });
    try {
      const newUser = await usersModel.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  router.post('/', async (req, res) => {
    const user = new usersModel({
      setup: req.body.setup,
      punchline: req.body.punchline,
    });
    try {
      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

export const updateAUser = router.put('/:id', getUser, async (req, res) => {
    if (req.body.setup != null) {
      res.user.setup = req.body.setup;
    }
    if (req.body.punchline != null) {
      res.user.punchline = req.body.punchline;
    }
    try {
      const updatedUser = await res.usersModel.save();
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  export const deleteUser = router.delete('/:id', getUser, async (req, res) => {
    try {
      await res.usersModel.remove();
      res.json({ message: 'Deleted User' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  

  
  
  