const mongoose = require ('mongoose');

const { Schema } = mongoose;

const User = new Schema({
  Name: String, 
  Email: String,
  Phone: String,
  }
);

