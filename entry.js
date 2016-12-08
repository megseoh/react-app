import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Import my React components
import Login from 'Login';
import App from 'App';
import EditNote from 'EditNote';
import NoteList from 'NoteList';
import NoteDetails from 'NoteDetails';

ReactDOM.render(
  <Router history={ browserHistory }>
  	<Route path="/" component={ App }>
      <IndexRoute component={ NoteList } />
  		<Route path="login" component={ Login } />
  		<Route path="write" component={ EditNote } />
  		<Route path="edit" component={ EditNote } />
  		<Route path="edit/:id" component={ EditNote } />
  		<Route path="view" component={ NoteDetails } />
  	</Route>
  </Router>,
  document.getElementById('app')
);