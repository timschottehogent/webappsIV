var mongoose = require('mongoose');

var WorkoutSchema = new mongoose.Schema({
  date: Date,
  exercises: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Exercise'
    }
  ],
  repetitions: {type: Array, default:[]},
  username: String
});	
mongoose.model('Workout', WorkoutSchema);