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

router.get('/API/workout/:id', function(req, res, next, id) {
  let query = Recipe.findById(id);
  query.exec(function(err, workout) {
    if (err) { return next(err); }
    if (!workout) 
      return next(new Error('not found ' + id));
    req.workout = workout;
    return next();
  });
});

router.get('/API/workout/:workout', function(req, res) {
  res.json(req.workout);
});

router.delete('/API/workout/:workout', function(req, res, next) {
  req.workout.remove(function(err) {
    if (err) { return next(err); }   
    res.json("removed workout");
  });
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('server works!');
});

router.post('/API/workouts/', function (req, res, next) {
  let workout = new Workout(req.body);
  workout.save(function(err, rec) {
    if (err){ return next(err); }
    res.json(rec);
  });
});  

module.exports = router;
