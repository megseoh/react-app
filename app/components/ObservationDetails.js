import React from 'react';
import styles from './ObservationDetails.scss';  //TODO: need to actually create & add these styles

var ObservationDetails = React.createClass({
	render: function() {
		return (
			<div>
				<h3>Observation Details Component</h3>
				<h3 className={ styles.title }>{ this.props.title }</h3>
				<p className={ styles.content }>{ this.props.content }</p>
				<img className={ styles.image } src={ this.props.image} />
				<p className={ styles.tags }>{ this.props.tags }</p>
			</div>
		);
	}
});

module.exports = ObservationDetails;