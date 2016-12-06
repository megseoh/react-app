import React from 'react';
import Nav from 'Nav';
import styles from './App.scss';
import $ from 'jquery';

var App = React.createClass({
	getInitialState: function() {
		return {
			notes: []
		}
	},

	render: function() {
		return (
			<div className={ styles.container + ' container'}>
				<Nav />
				<h2>Main App Component</h2>
				{ React.cloneElement(this.props.children, {
				  notes: this.state.notes,
				  onRefresh: this.refresh
				})}
			</div>
		);
	},

	refresh: function() {
		$.get('/api/notes', (data) => this.setState({ notes: data }));
	},

	componentDidMount: function() {
		this.refresh();
	}
});

module.exports = App;