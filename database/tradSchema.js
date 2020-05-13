const mongoose = require('mongoose');

const tradSchema = mongoose.Schema({
  size: String,
  medium: String,
  image: String
});

module.exports = Traditional = mongoose.model('Traditional', tradSchema);