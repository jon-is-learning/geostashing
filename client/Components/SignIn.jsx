import React from 'react';
import { Link } from 'react-router';

const SignIn = () =>
    <div>
      <h1>SIGN IN</h1>
      <form method="GET" action="/api/users/:name">
	      <h4>Username</h4>
	      <input 
	      	type="text" 
	      	ref="username"/>
	      <h4>Password</h4>
	      <input 
	      	type="password" 
	      	ref="password"/>
	      <input 
	      	name="Sign In" 
	      	type="submit" 
	      	onClick=""/>
	      <Link to="signup">Register</Link>
      </form>
    </div>;

export default SignIn;
