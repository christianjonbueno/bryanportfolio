const Router = require('express').Router();
const controller = require('./controller.js');

Router
  .route('/concepts')
  .get(controller.getConcepts);

module.exports = Router;