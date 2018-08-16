let mongoose = require('mongoose');

let ExerciseSchema = new mongoose.Schema({
    name: String,
    difficulty: {type: Number, default: 0}
});



mongoose.model('Exercise', ExerciseSchema);