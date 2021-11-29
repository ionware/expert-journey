const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      // combine first name and last name for simplicity.
      type: String,
      required: ['Tell us your name, will you?'],
    },
    email: {
      type: String,
      required: ['Your email address is important.'],
      unique: true,
    },
    password: {
      type: String,
      required: ['Choose a strong and secure password.'],
    },
  },
  { timestamps: true }
);

module.exports = model('User', userSchema);
