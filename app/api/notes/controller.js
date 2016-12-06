var Note = require('./model.js');

// returns every model in the database
exports.index = function(req, res) {
  Note.find().then((notes) => res.send(notes));
};

exports.create = function(req, res) {
  // res.send("Creating a new note");
  var note = new Note();

  note.title = req.body.title;
  note.content = req.body.content;
  note.image = req.body.image;
  note.tags = req.body.tags;
  // note.user = '5834b08bb7395187b292be38';

  note.save()
  .then(function(note) {
    res.send(note);
  }).catch(function(err) {
    res.status(422);
    res.send(err);
  });
};

exports.show = function(req, res) {
  // var note = Note.find((note) => note.id == req.params.id);
  // if (!note) {
  //   res.status(404);
  //   res.send("Not found");
  // }
  // res.send(note);
  Note.findById(req.params.id)
  .then((note) => res.send(note))
  .catch((err) => res.send(404));
}

exports.update = function(req, res) {
  // var note = Note.find((note) => note.id == req.params.id);
  // note.title = "Updated";
  // res.send("OK");
  Note.findById(req.params.id)
  .then((note) => {

  	note.title = req.body.title;
  	note.content = req.body.content;
  	note.image = req.body.image;
  	note.tags = req.body.tags;
  	// note.user = '5834b08bb7395187b292be38';

    note.save()
    .then(() => res.send(note))
    .catch((err) => {
      res.status(422);
      res.send(err);
    });
  })
  .catch((err) => res.send(404));
}

exports.delete = function(req, res) {
  var index = Note.findIndex((note) => note.id == req.params.id);
  notes.splice(index, 1);
  res.send(200);
}