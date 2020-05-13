const express = require('express');
const router = require('./router.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/art', router);

app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(port, () => console.log(`Listening on port ${port}`));