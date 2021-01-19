var express = require('express');
var path = require('path');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var movieRouter = require('./routes/movies');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", '/build')));

app.use('/', indexRouter);
app.use('/movies', movieRouter);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Listening on port " + PORT));

module.exports = app;
