const db = require('../database');
const Concept = require('../database/conceptSchema.js');
const Trad = require('../database/tradSchema.js');
const Drawing = require('../database/DrawingSchema.js');

const controller = {
  getConcepts: (req, res) => {
    Concept.find()
      .then(() => res.status(200).send('Hello from controller'))
      .catch(err => console.error);
  }
}

module.exports = controller;