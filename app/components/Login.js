import React from 'react';
import styles from './Login.scss';

var Login = React.createClass({
  getInitialState: function() {
    return {
      login: {
        mode: 'login',
        email: '',
        password: '',
        name: ''
      }
    }
  },
  render: function() {
  	return (
  		<form className={ styles.container }>
  			<div>
	  			<label>
	  			  <input type='radio' name='mode' value='login' checked={ this.state.mode == 'login' } onChange={ this.setMode } />
	  			  Login
	  			</label>
	  			<label>
	  			  <input type='radio' name='mode' value='signup' checked={ this.state.mode == 'signup' } onChange={ this.setMode } />
	  			  Sign-up
	  			</label>
				</div>
				<div>
				  <label for='email'>Email</label>
				  <input type='text' name='email' value={ this.state.email } onChange={ this.setEmail } />
				</div>
				<div>
				  <label for='password'>Password</label>
				  <input type='password' name='password' value={ this.state.password } onChange={ this.setPassword } />
				</div>
				<div>
				  <button onClick={ this.login }>Login</button>
				</div>
			</form>
		)
  },
  setEmail: function(event) { this.setState({ email: event.target.value }); },
  setPassword: function(event) { this.setState({ password: event.target.value }); },
  setMode: function(event) { this.setState({ mode: event.target.value }); }
});

module.exports = Login;