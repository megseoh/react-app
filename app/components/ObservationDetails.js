import React from 'react';

var ObservationDetails = React.createClass({
	render: function() {
		return (
			<div>
				<h3>Observation Details Component</h3>
				<h3>{ this.props.title }</h3>
				<p>{ this.props.content }</p>
				<img src={ this.props.image} />
				<p>{ this.props.tags }</p>
			</div>
		);
	}
});

module.exports = ObservationDetails;