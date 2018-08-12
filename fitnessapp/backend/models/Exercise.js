let mongoose = require('mongoose');

let ExerciseSchema = new mongoose.Schema({
    name: String,
    difficulty: {type: Number, default: 0}
});

ExerciseSchema.pre('remove', function (next) {
    this.model('Exercise').update({}, 
      { $pull: { exercises: this._id } }, 
      { safe: true, multi: true }, next);
  });

mongoose.model('Exercise', ExerciseSchema);