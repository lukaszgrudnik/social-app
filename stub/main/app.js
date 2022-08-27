const express = require('express');
const app = express();

const posts = require('../services/posts')

// Services:
app.use('/', posts);

module.exports = app;
