import React from 'react';

var AddObservation = React.createClass({
	onButtonClick: function(e) {
		e.preventDefault();
		console.log("Add Observation Button Clicked!");
	},
	onButtonTwoClick: function(e) {
		e.preventDefault();
		console.log("Add Observation Button Two Clicked!");
	},
	render: function() {
		return (
			<div className="row">
				<h3>Add Observation Component</h3>
				<form onSubmit={ this.onButtonClick}>
					<input type='text' />
					<button>Add New</button>
				</form>
				<button onClick={ this.onButtonTwoClick }>Add New Observation</button>
			</div>
		);
	}
});

module.exports = AddObservation;