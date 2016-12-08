import React from 'react';
import NoteDetails from 'NoteDetails';
// not doing anything at this point
// look at Field.js or EditNote.js

var NoteFields = React.createClass({
	render: function() {
		return (
			<div>
				<h3>Note Fields Component</h3>
				<form>
					<div><input type="text" onChange={ this.updateFields.title } placeholder="What is your note about?" /></div>
					<div><textarea onChange={ this.updateFields.content }></textarea></div>
					<div><input type="text" onChange={ this.updateFields.image } /></div>
					<button onClick={ this.doSomething }>Create Note</button>
				</form>
			</div>
		);
	},
	// updateFields: function(event) {
	// 	this.setState({
	// 		title: event.target.value,
	// 		content: event.target.value,
	// 		image: event.target.value
	// 	})
	// }
});

module.exports = NoteFields;