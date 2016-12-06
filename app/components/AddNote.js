import React from 'react';

var AddNote = React.createClass({
	onButtonClick: function(e) {
		e.preventDefault();
		console.log("Add Note Button Clicked!");
	},
	onButtonTwoClick: function(e) {
		e.preventDefault();
		console.log("Add Note Button Two Clicked!");
	},
	render: function() {
		return (
			<div className="row">
				<h3>Add Note Component</h3>
				<form onSubmit={ this.onButtonClick}>
					<input type='text' />
					<button>Add New</button>
				</form>
				<button onClick={ this.onButtonTwoClick }>Add New Note</button>
			</div>
		);
	}
});

module.exports = AddNote;