const data = require('../data/info.json');
var express = require('express');
var router = express.Router();

var userRoutes = require('./user/user');

router
.get('/', function(req, res){
    res.header("Content-Type",'application/json');
    //file with all the end points info from the server
    res.send(JSON.stringify(data));
    res.status(200);
})
.get('/user/:userName', function (req, res) {
  var userDetails;
  var userName = req.params.userName;
  var initializePromise = userRoutes.initializeUser(userName);
  initializePromise.then(function(result){
    userDetails = result;
    res.send(userDetails);
  }, function(err) {
    res.send(err);
  });
})


module.exports = router;
