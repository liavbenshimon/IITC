const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required : true
     },
      firstName: { 
        type: String,
        required : true
       },
      lastName: {
        type: String,
        required : true
       }
  }
);

userSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});

// userSchema.set('toJSON', { virtuals: true });
// userSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('User', userSchema);
