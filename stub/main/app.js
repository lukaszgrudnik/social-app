const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const posts = require('../services/posts')
const login = require('../services/login')

app.use(cors())
app.use(bodyParser.json());


// Services:
app.use('/', posts);
app.use('/login', login)



module.exports = app;
