var express = require('express');
require('dotenv').config();
var path = require('path');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var movieRouter = require('./routes/movies');
const PORT = process.env.PORT || 3002;
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", '/build')));
app.use(express.static("public"));


app.use('/', indexRouter);
app.use('/movies', movieRouter);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.log("Listening on port " + PORT));

module.exports = app;
