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
  	String,
  	required: true
  },
  image: String,
  tags: Array,
  comments: {
    type: [CommentSchema],
    default: []
  },
  likedBy: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User',
    default: [],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Note', NoteSchema);