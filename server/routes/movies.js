var express = require('express');
var request = require('request');
var router = express.Router();
//get api key from .env file
const API_KEY = process.env.REACT_APP_OMDB_API_KEY

// GET /movies/key/:key
router.get('/key/:key', async function (req, res) {
  //Search key
  const { key } = req.params;
  var url = "http://www.omdbapi.com/?apikey=" + API_KEY + "&s=" + key;
  console.log(url);

  await request({ url }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      //console.log(body);
      res.send(body);
    } else {
      console.log(url);
      res.send("response");
    }
  });
});

// GET /movies/ID/:ID
router.get('/ID/:ID', async function (req, res) {
  const { ID } = req.params;
  var url = "http://www.omdbapi.com/?apikey=" + API_KEY + "&i=" + ID;
  console.log(url);

  await request({url}, function(error, response, body) {
    if(!error && response.statusCode == 200) {
      res.send(body)
    } else {
      console.log("error")
      res.send("error")
    }
  })

});


module.exports = router;