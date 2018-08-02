var express = require('express');
var router = express.Router();

let mongoose = require('mongoose');
let Workout = mongoose.model('Workout');

router.get('/API/workouts/', function(req, res, next) {
  Workout.find(function(err, workouts) {
    if (err) { return next(err); }
    res.json(workouts);
  });
});

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.send('server works!');
//});

module.exports = router;
