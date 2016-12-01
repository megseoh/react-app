import React from 'react';
import styles from './Login.scss';

var Login = React.createClass({
  // getInitialState: function() {
  //   return {
  //     login: {
  //       mode: 'login',
  //       email: '',
  //       password: '',
  //       name: ''
  //     }
  //   }
  // },

  render: function() {
  	return (
  		<form className={ styles.container }>
  			<label>
  			  <input type='radio' name='mode' value='login' />
  			  Login
  			</label>
  			<label>
  			  <input type='radio' name='mode' value='signup' />
  			  Sign-up
  			</label>
			</form>
		)
  }
});

module.exports = Login;