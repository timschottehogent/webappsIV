var express = require('express');
var router = express.Router();

let mongoose = require('mongoose');
let Workout = mongoose.model('Workout');
let Exercise = mongoose.model('Exercise');
let jwt = require('express-jwt');

let auth = jwt({secret: process.env.RECIPE_BACKEND_SECRET});

router.get('/API/workouts/', auth, function(req, res, next) {
  let user = req.user.username;
  let query = Workout.find().populate('exercises');
  query.exec(function(err, workouts) {
    if (err) return next(err);
    resultaat = workouts.filter(val => {
      return val.username == user;
    })
    res.json(resultaat);

    



  })
});

router.post('/API/workouts/', auth, function (req, res, next) {
    let workout = new Workout({date: req.body.date, exercises: req.body.exercises, repetitions: req.body.repetitions,
       username: req.user.username});
       
       
    workout.save(function(err, post) {
      
      res.json(workout);
    });
  
}); 

router.post('/API/exercises/', auth, function (req, res, next) {


  let exercise = new Exercise({name: req.body.name, 
    difficulty: req.body.difficulty, exercises: req.body.exercises});
  exercise.save(function(err, post) {
    res.json(exercise);
  });
}); 


router.param('workout', auth, function(req, res, next, id) {
  let query = Workout.findById(id).populate('exercises');
  query.exec(function(err, workout) {
    if (err) {
      return next(err);
    }
    if (!workout) {
      return next(new Error('not found ' + id));
    }
    req.workout = workout;
    return next();
  });
});


router.get('/API/workout/:workout', auth, function(req, res) {
  let username = req.user.username;
  Workout.find({user: username}, function(err, workouts){
    if(err){
      return next(err);
    }
    res.json(workouts);
  });  
});


router.delete('/API/workouts/:workout', auth, function(req, res) {
  req.workout.remove(function(err) {
    if (err) {
      return next(err);
    }
    res.json(req.workout);
  });
})



router.get('/API/exercises/', function(req, res, next) {
  Exercise.find(function(err, exercises) {
    if (err) { return next(err); }
    res.json(exercises);
  });
});




router.param('exercise', function(req, res, next, id) {
  let query = Exercise.findById(id);
  query.exec(function(err, exercise) {
    if (err) {
      return next(err);
    }
    if (!exercise) {
      return next(new Error('not found ' + id));
    }
    req.exercise = exercise;
    return next();
  });
});


router.get('/API/exercises/exerise/:exercise', function(req, res) {
  res.json(req.exercise);
});

router.get('/API/exercises/:exercise', function(req, res) {
  res.json(req.exercise);
});


router.delete('/API/exercises/:exercise', auth, function(req, res) {
  req.exercise.remove(function(err) {
    if (err) {
      return next(err);
    }
    res.json(req.exercise);
  });
});







 

module.exports = router;
