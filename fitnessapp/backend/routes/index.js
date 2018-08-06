var express = require('express');
var router = express.Router();

let mongoose = require('mongoose');
let Workout = mongoose.model('Workout');
let Exercise = mongoose.model('Exercise');

router.get('/API/workouts/', function(req, res, next) {
  let query = Workout.find().populate('exercises');
  query.exec(function(err, workouts) {
    if (err) return next(err);
    res.json(workouts);
  })
});

router.get('/API/workout/:id', function(req, res, next, id) {
  let query = Workout.findById(id);
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

router.delete('/API/workout/:workout', function(req, res) {
  Exercises.remove({ _id: {$in: req.workout.exercises }}, 
    function (err) {
      if (err) return next(err);
      req.workout.remove(function(err) {
        if (err) { return next(err); }   
        res.json(req.workout);
      });
    })
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('server works!');
});

router.post('/API/workouts/', function (req, res, next) {
  console.log('test');
  Exercise.create(req.body.exercises, function(err, ex) {
    if (err) {
      return next(err);
    }
    let workout = new Workout({date: req.body.date, 
      repetitions: req.body.repetitions});
    workout.exercises = ex;
    workout.save(function(err, post) {
      if (err){
        Exercise.remove({ _id: { $in: workout.exercises } });
        return next(err);
      }
      res.json(workout);
    });
  });
});  

module.exports = router;
