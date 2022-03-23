const mongoose = require('mongoose');

const userModel = new mongoose.Schema(
    {
      firstName: {type: String},
      lastName: {type: String},
      userName: {type: String},
      password: {type: String},
      city: {type: String},
      email: {type: String},
    },
);

module.exports = mongoose.model('User', userModel);
