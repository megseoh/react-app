import React from 'react';
import AddObservation from 'AddObservation';

var ObservationList = React.createClass({
	render: function() {
		return (
			<div>
				<h3>Observation List Component</h3>
				<AddObservation />
			</div>
		);
	}
});

module.exports = ObservationList;