import React from 'react';
import NoteDetails from 'NoteDetails';
// import EditNote from 'EditNote';
// import App from 'App';

var NoteList = React.createClass({
  render: function() {
    console.log('HERE', this);
    return (
      <div className="row">
        { this.props.notes.map((note) =>
          <NoteDetails key={ note.id }
                id={ note.id }
                title={ note.title }
                user={ note.user }
                content={ note.content }
                image={ note.image }
                tags={ note.tags } />
        )}
      </div>
    )
  }
});

module.exports = NoteList;