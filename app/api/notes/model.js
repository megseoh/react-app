var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  content: String
});

var NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
  	type: String,
  	required: true
  },
  image: String,
  tags: [String],
  comments: {
    type: [CommentSchema],
    default: []
  },
  likedBy: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User',
    default: []
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

// create a model & make this available
module.exports = mongoose.model('Note', NoteSchema);