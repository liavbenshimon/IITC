// models/userModel.js
import mongoose from "mongoose";

// הגדרת סכימת משתמש
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

export default User;
