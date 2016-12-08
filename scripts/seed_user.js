var User = require('../app/api/users/model');
var Note = require('../app/api/notes/model');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/notes');

var u = new User();
u.email = 'molang@test.org';
u.name = 'Molang User';

u.save().then(function(u) {
  Note.find().then((notes) => {
    notes.forEach((post) => {
      post.user = u._id;

      if (post.comments.length == 0) {
        post.comments.push({ user: u._id, content: "Test Comment 1. Extra blah blah blah."});
        post.comments.push({ user: u._id, content: "Test Comment 2 more shit."});
      }

      if (post.likedBy.length == 0) {
        post.likedBy.push(u._id);
      }

      post.save();
    })
  });
});