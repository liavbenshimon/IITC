const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    name: {
        type: string, 
        required: true,
    },
    lastName: {
        type: string, 
        required: true,
    },
    id: {
        type: string, 
        required: true,
        unique: true
    }
});

// Create the model from the schema
const User = mongoose.model('User', userSchema);

// Export the model in order to use him on the oother files
module.exports = User;


