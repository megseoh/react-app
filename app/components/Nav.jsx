var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
	render: function() {
		return (
			<nav>
				<h2>React Notes</h2>
				<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Observation List</IndexLink>
				<Link to="/write" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Add Observation</Link>
				<Link to="/view" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Observation Details</Link>
			</nav>
		);
	}
});

module.exports = Nav;