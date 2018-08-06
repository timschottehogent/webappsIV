var mongoose = require('mongoose');

var WorkoutSchema = new mongoose.Schema({
  date: Date,
  exercises: [{type: mongoose.Schema.Types.ObjectId, 
    ref: 'Exercise'}],
  repetitions: [Number],
});	
mongoose.model('Workout', WorkoutSchema);