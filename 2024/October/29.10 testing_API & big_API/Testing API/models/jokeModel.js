import mongoose from "mongoose";

const jokeSchema = new mongoose.Schema({
  joke: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Joke = mongoose.model("Joke", jokeSchema);
export default Joke;