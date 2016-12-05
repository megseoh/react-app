import React from 'react';
import ObservationDetails from 'ObservationDetails';

var ObservationFields = React.createClass({
	render: function() {
		return (
			<div>
				<h3>Observation Fields Component</h3>
				<form>
					<div><input type="text" onChange={ this.updateFields.title } placeholder="What is your observation about?" /></div>
					<div><textarea onChange={ this.updateFields.content }></textarea></div>
					<div><input type="file" onChange={ this.updateFields } /></div>
					<button onClick={ this.doSomething }>Create Observation</button>
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

module.exports = ObservationFields;