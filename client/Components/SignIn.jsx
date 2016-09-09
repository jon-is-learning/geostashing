import React from 'react';
import { Link } from 'react-router';

const SignIn = () =>
    <div>
      <h1>SIGN IN</h1>
      <h4>Username</h4>
      <input type="text" />
      <h4>Password</h4>
      <input type="password" />
      <input type="submit" />
      <Link to="signup">Register</Link>
    </div>;

export default SignIn;
