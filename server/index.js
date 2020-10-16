const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const app = express();
const Movies = require("../database-mongo")
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use('/static', express.static(__dirname + 'react-client/dist'));
app.use(express.static(__dirname + '/../react-client/dist'));

// Routers 
const movieRouter = require('../routers/movieRouter');
const user = require('../routers/usersRouter');


app.use('/movie', movieRouter)
app.use('/user', user)

app.listen(3000, () => {
  console.log('listening on port 3000!');
});

