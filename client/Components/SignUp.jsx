import React from 'react';
/* import { Router, Route, Link } from 'react-router'; */

class SignUp extends React.Component {
	submitNewUser(ev) {
		console.log('USERNAME: ', this.refs.username.value); 
		ev.preventDefault(); 
		const newUser = {
			name: this.refs.username.value, 
			password: this.refs.password.value
		}; 

		const userReq = new Request('/api/users', {
		  method: 'POST',
		  body: JSON.stringify(newUser),
		  headers: { 'content-type': 'application/json' }
		});

		fetch(userReq).then(function(response) {
			console.log(response); 
		}); 
	}
	render() {
		return (
		    <div>
		      <h1>Sign Up!</h1>
		      <form>
			      <h4>Username</h4>
			      <input 
			      	ref="username"
			      	type="text" />
			      <h4>Password</h4>
			      <input
			      	ref="password" 
			      	type="password"/>
			      <input
			      	type="submit"
			      	onClick={this.submitNewUser.bind(this)}/>
			  </form>
    		</div>
    	); 
	}

}; 

export default SignUp;
