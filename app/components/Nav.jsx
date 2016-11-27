import React from 'react';
import styles from './Nav.scss';
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
	render: function() {
		return (
			<nav>
				<h2>React Notes App</h2>
				<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}} className={ styles.navlink }>Observation List</IndexLink>
				<Link to="/write" activeClassName="active" activeStyle={{fontWeight: 'bold'}} className={ styles.navlink }>Add Observation</Link>
				<Link to="/view" activeClassName="active" activeStyle={{fontWeight: 'bold'}} className={ styles.navlink }>Observation Details</Link>
			</nav>
		);
	}
});

module.exports = Nav;