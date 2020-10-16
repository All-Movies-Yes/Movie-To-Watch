const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Movies');

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});


var userSchema = mongoose.Schema({
  username:  String,
  email:  String,
  password:  String
});

var User1 = mongoose.model("User1", userSchema);

var selectAll = function(callback) {
  User1.find({}, function(err, items) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
}

  var findOne = function(username,callback) {
    User1.find({username: username}, callback);
  }

  var insertOne = function(user,callback) {
    User1.create(user, callback);
  }


module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;
module.exports.findOne = findOne;
