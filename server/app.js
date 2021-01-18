var express = require('express');
require('dotenv').config()
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var movieRouter = require('./routes/movies');
var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "..", '/build')));
app.use(express.static("public"));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/', indexRouter);
app.use('/movies', movieRouter);


const port = process.env.PORT || 3002;
app.listen(port, () => console.log("Listening on port " + port));

module.exports = app;
