import User from "../Model/userModel.js";

export const findUsersByName = async (req, res) => {
  const { name } = req.query; // קבלת פרמטר השם מהשאילתה
  
  try {
    const users = await User.find({ name: new RegExp(name, "i") }); // חיפוש רגיש לאותיות גדולות וקטנות
    if (users.length === 0) {
      return res.status(404).json({ message: "No users found with the given name" });
    }    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const users = req.body;

  try {
    if (Array.isArray(users)) {

      const createdUsers = await User.insertMany(users);
      res.status(201).json(createdUsers);
    } else {

      const user = new User(users);
      await user.save();
      res.status(201).json(user);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
