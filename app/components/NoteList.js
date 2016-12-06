import React from 'react';
import NoteDetails from 'NoteDetails';
import EditNote from 'EditNote';

var NoteList = React.createClass({
  render: function() {
    return  (
      <div className="row">
      var anything = this.props.data;
      console.log(anything);
        { this.props.notes.map((note) =>
          <note key={ note._id }
                id={ note._id }
                title={ note.title }
                content={ note.content }
                image={ note.image }
                tags={ note.tags }
                user={ note.user }
                likedBy={ note.likedBy }
                comments={ note.comments } />
        )}
      </div>
    );
  }
});

module.exports = NoteList;