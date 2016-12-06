import React from 'react';
import styles from './NoteDetails.scss';  //TODO: need to actually create & add these styles
import CommentList from 'CommentList';
import { Link } from 'react-router';

var NoteDetails = React.createClass({
	render: function() {
		return (
			<div className="row">
				<h3>Note Details Component</h3>
				<h3 className={ styles.title }>{ this.props.title }</h3>
				<p className={ styles.user }>{ this.props.user.name } posted:</p>
				<p className={ styles.content }>{ this.props.content }</p>
				<img className={ styles.image } src={ this.props.image} />
				<p className={ styles.tags }>{ this.props.tags }</p>
				<div className={ styles.actions }>
				  <Link to={ '/edit/' + this.props.id }>Edit</Link>
				</div>
				<CommentList comments={ this.props.comments } postId={ this.props.postId } />
			</div>
		);
	}
});

module.exports = NoteDetails;