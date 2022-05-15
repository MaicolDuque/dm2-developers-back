'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const appRoutes = require('./routes')

// Add body-parser middleware
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

//Set available routes
app.get('/', (_req, res) => res.json({ message: 'Working!' }))
appRoutes(app)

module.exports = app
