import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from 'Main';
import ObservationList from 'ObservationList';
import AddObservation from 'AddObservation';
import ObservationDetails from 'ObservationDetails';

ReactDOM.render(
  <Router history={ browserHistory }>
  	<Route path="/" component={ Main }>
  		<Route path="write" component={ AddObservation }/>
  		<Route path="view" component={ ObservationDetails }/>
  		<IndexRoute component={ ObservationList }/>
  	</Route>
  </Router>,
  document.getElementById('app')
);