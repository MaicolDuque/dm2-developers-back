'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const appRoutes = require('./routes')

// Add body-parser middleware
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

// Set CORS
app.use(cors({
	origin: config.url_front, // allow to server to accept request from different origin
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	credentials: true // allow session cookie from browser to pass through
}));

//Set available routes
app.get('/', (_req, res) => res.json({ message: 'Working!' }))
appRoutes(app)

module.exports = app
