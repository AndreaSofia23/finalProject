const mongoose = require('mongoose');

const funkoModel = new mongoose.Schema(
    {
      name: {type: String},
      category: {type: String},
      ilimited: {type: Boolean},
      price: {type: Number},
      collection: {type: String},
    },
);
module.exports = mongoose.model('Funko', funkoModel);
