import React from 'react';

var AddObservation = React.createClass({
	render: function() {
		return (
			<div>
				<h3>Add Observation Component</h3>
				<form>
					Observation Title <input type="text" placeholder="What is your observation about?" /><br />
					<textarea></textarea><br />
					<button>Create Observation</button>
				</form>
			</div>
		);
	}
});

module.exports = AddObservation;