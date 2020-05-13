const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/bryan', {useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to db'))
  .catch(err => console.error(err));

module.exports = db;