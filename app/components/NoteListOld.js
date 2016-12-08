import React from 'react';
import AddNote from 'AddNote';
import NoteDetails from 'NoteDetails';

// http://stackoverflow.com/questions/38742334/what-is-right-way-to-do-api-call-in-react-js
export default class NoteListOld extends React.Component {
  constructor(props) {
    super(props);

    let sample = {
    	id: 1,
			title: "My first Title",
			content: "Jelly pastry bear claw muffin candy canes jelly beans chocolate candy canes. Carrot cake tart biscuit danish gummi bears marzipan sweet roll danish pastry.",
			image: "https://s-media-cache-ak0.pinimg.com/736x/2e/0e/be/2e0ebe1d29712240d3b29e0051de96c6.jpg",
			tags: [ "green", "blue", "red" ]
    };

    this.state = { notes:[sample] };
    console.log({
    	state: this.state
    })
  }

  componentDidMount() {
    // this.NoteList();
  }

  NoteList(){
	  return $.getJSON('/api/notes')	//TODO: connect to my database
	  .then(function(data) {
	    return data.results;
	  });
	}

	render() {
		if (this.state.notes === null) {
			return <span />
		}
    return (
      <div className="row">
        <h3>Note List Component</h3>
        {this.state.notes.map((note, i) =>{
          return(
            <NoteDetails key={ note.id } title={ note.title } content={ note.content } image={ note.image } tags={ note.tags } />
          )
        })}
        <AddNote />
      </div>
    )
  }
}

module.exports = NoteListOld;