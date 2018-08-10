var mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    username: { type: String, lowercase: true, unique: true},
    hash: String,
    salt: String
})

mongoose.model('User', UserSchema);