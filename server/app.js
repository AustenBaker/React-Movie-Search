var express = require('express');
var path = require('path');
var logger = require('morgan');
require('dotenv').config()
var movieRouter = require('./routes/movies');
const PORT = process.env.PORT || 5000;

express()
  .use(logger('dev'))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(express.static(path.resolve(__dirname, './build')))
  .use('/movies', movieRouter)
  .get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './build', 'index.html'));
})
    .listen(PORT, () => console.log("Listening on port " + PORT));