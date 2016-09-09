import React from 'react';
/* import { Router, Route, Link } from 'react-router'; */

class SignUp extends React.Component {
	render() {
		return (
		    <div>
		      <h1>Sign Up!</h1>
		      <form method="POST" action="/api/users">
			      <h4>Username</h4>
			      <input 
			      	ref="username"
			      	type="text" />
			      <h4>Password</h4>
			      <input
			      	ref="password" 
			      	type="password"/>
			      <input
			      	name="Join" 
			      	type="submit"
			      	onClick={this.submitNewUser.bind(this)}/>
			  </form>
    		</div>
    	); 
	}

	submitNewUser(ev) {
		const newUser = {
			name: this.refs.username.value, 
			password: this.refs.password.value
		}; 

		const userReq = new Request('/api/users', {
		  method: 'POST',
		  body: JSON.stringify(newUser),
		  headers: { 'content-type': 'application/json' }
		});
	}
}; 

export default SignUp;
