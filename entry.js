import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Import my React components
import Login from 'Login';
import Main from 'Main';
import EditObservation from 'EditObservation';
import ObservationList from 'ObservationList';
import ObservationDetails from 'ObservationDetails';

ReactDOM.render(
  <Router history={ browserHistory }>
  	<Route path="/" component={ Main }>
  		<Route path="login" component={ Login }/>
  		<Route path="write" component={ EditObservation }/>
  		<Route path="view" component={ ObservationDetails }/>
  		<IndexRoute component={ ObservationList }/>
  	</Route>
  </Router>,
  document.getElementById('app')
);