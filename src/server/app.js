const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

// use methods libs
const app = express();
require('dotenv').config();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/category', require('../routes/controller.routes'));
app.use('/api/videogame', require('../routes/videogame.routes'));
app.use('/api/auth', require('../routes/auth.routes'));

module.exports = app;