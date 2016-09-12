import React from 'react';
import { Link, withRouter } from 'react-router';
import $ from 'jquery';

const SignIn = withRouter(
  React.createClass({
    getInitialState() {
      return {
        error: false,
        username: '',
        password: ''
      };
    },

    userPasswordChange(event) {
      this.setState({ password: event.target.value });
    },

    checkLoginInfo(event) {
      event.preventDefault();
      $.ajax({
        method: 'GET',
        url: '/api/users/',
        dataType: 'json',
        success: (data) => {
          console.log('DATA: ', data);
        },
        error: (error) => {
          console.log('ERROR: ', error);
        }
      });
    },

    render() {
      return (
        <div>
          <h1>SIGN IN</h1>
          <form onSubmit={this.checkLoginInfo}>
            <h4>Username</h4>
            <input ref="username" type="text" />
            <h4>Password</h4>
            <input ref="password" type="password" />
            <input type="submit" />
          </form>
          <Link to="signup">Register</Link>
        </div>
      );
    }
  })

);

export default SignIn;
