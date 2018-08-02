var mongoose = require('mongoose');

var WorkoutSchema = new mongoose.Schema({
  date: Date,
  exercises: [String],
  repetitions: [Number],
});	
mongoose.model('Workout', WorkoutSchema);