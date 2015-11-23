var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({

  username: {type: String, required: true, unique: true},
  password: String,
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
});

var User = mongoose.model('User', userSchema);

module.exports = User;
