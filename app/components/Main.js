import React from 'react';
import Nav from 'Nav';
import styles from './Main.scss';

var Main = React.createClass({
	render: function() {
		return (
			<div className={ styles.container + ' container'}>
				<Nav />
				<h2>Main Component</h2>
				{this.props.children}
			</div>
		);
	}
});

module.exports = Main;