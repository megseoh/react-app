import React from 'react';
import styles from './Nav.scss';
import { Link, IndexLink } from 'react-router';

var Nav = React.createClass({
	render: function() {
		return (
			<nav>
				<h1>React Notes App</h1>
				<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}} className={ styles.navlink }>Observation List</IndexLink>
				<Link to="/write" activeClassName="active" activeStyle={{fontWeight: 'bold'}} className={ styles.navlink }>Add Observation</Link>
				<Link to="/view" activeClassName="active" activeStyle={{fontWeight: 'bold'}} className={ styles.navlink }>Observation Details</Link>
				<Link to="/login" activeClassName="active" activeStyle={{fontWeight: 'bold'}} className={ styles.navlink }>Login</Link>
			</nav>
		);
	}
});

module.exports = Nav;