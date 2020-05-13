const mongoose = require('mongoose');

const drawingSchema = mongoose.Schema({
  size: String,
  medium: String,
  image: String
});

module.exports = Drawing = mongoose.model('Drawing', drawingSchema);