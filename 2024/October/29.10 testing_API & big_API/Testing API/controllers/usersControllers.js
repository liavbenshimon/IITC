import usersModel from '../models/usersModel.js';

// Logic to get all users
async function getAllUsers(req, res) {
  try {
    const users = await usersModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Logic to get a user by ID
async function getUsersByID(req, res) {
  res.json(res.user);
}

// Middleware to find a user by ID
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

// Logic to create a new user
async function createNewUser(req, res) {
  const user = new usersModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Logic to update a user
async function updateAUser(req, res) {
  if (req.body.name != null) {
    res.user.name = req.body.name;
  }
  if (req.body.email != null) {
    res.user.email = req.body.email;
  }
  if (req.body.password != null) {
    res.user.password = req.body.password;
  }
  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Logic to delete a user
async function deleteUser(req, res) {
  try {
    await res.user.remove();
    res.json({ message: 'Deleted User' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Exporting the functions and middleware
export {
  getAllUsers,
  getUsersByID,
  getUser,
  createNewUser,
  updateAUser,
  deleteUser
};