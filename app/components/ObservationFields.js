import React from 'react';
import ObservationDetails from 'ObservationDetails';

var ObservationFields = React.createClass({
	getInitialState: function() {
		return {
			title: "My first Title",
			content: "Jelly pastry bear claw muffin candy canes jelly beans chocolate candy canes. Carrot cake tart biscuit danish gummi bears marzipan sweet roll danish pastry.",
			image: "https://s-media-cache-ak0.pinimg.com/736x/2e/0e/be/2e0ebe1d29712240d3b29e0051de96c6.jpg",
			tags: [ "green", "blue", "red" ]
		}
	},
	render: function() {
		return (
			<div>
				<ObservationDetails title={ this.state.title} content={ this.state.content } image={ this.state.image } tags={ this.state.tags } />
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
	updateFields: function(event) {
		this.setState({
			title: event.target.value,
			content: event.target.value,
			image: event.target.value
		})
	}
});

module.exports = ObservationFields;