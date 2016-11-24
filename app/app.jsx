var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var ObservationList = require('ObservationList');
var AddObservation = require('AddObservation');
var ObservationDetails = require('ObservationDetails');

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={Main}>
  		<Route path="write" component={AddObservation}/>
  		<Route path="view" component={ObservationDetails}/>
  		<IndexRoute component={ObservationList}/>
  	</Route>
  </Router>,
  document.getElementById('app')
);