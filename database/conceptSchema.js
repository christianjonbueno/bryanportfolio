const mongoose = require('mongoose');

const conceptSchema = mongoose.Schema({
  title: String,
  description: String,
  image: String
});

module.exports = Concept = mongoose.model('Concept', conceptSchema);