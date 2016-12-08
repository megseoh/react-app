import React from 'react';
import styles from './NoteDetails.scss';  //TODO: need to actually create & add these styles
import EditNote from 'EditNote';
import CommentList from 'CommentList';
import { Link } from 'react-router';

var NoteDetails = React.createClass({
	render: function() {
		return (
			<div className="row">
				<h3>Note Details Component</h3>
				<div className={ styles.title }>{ this.props.title }</div>
				<div className={ styles.user }>{ this.props.user }</div>
				<div className={ styles.content }>{ this.props.content }</div>
				<div className={ styles.image }><img src={ this.props.image} /></div>
				<div className={ styles.tags }>{ this.props.tags }</div>
				<div className={ styles.actions }>
				  <Link to={ '/edit/' + this.props.id }>Edit</Link>
				</div>
			</div>
		);
	}
});

module.exports = NoteDetails;