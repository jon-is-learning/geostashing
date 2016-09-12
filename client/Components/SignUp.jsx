import React from 'react';
import { withRouter } from 'react-router';

import auth from './../auth.js';

const SignUp = withRouter(
  React.createClass({
    getInitialState() {
      return {
        error: false,
      };
    },

    checkSignUpInfo(event) {

      event.preventDefault();

      const username = this.refs.username.value;
      const password = this.refs.password.value;
      const confirmPassword = this.refs.confirmPassword.value;

      if (confirmPassword === password) {
        auth.signup(username, password, (loggedIn) => {
          if (!loggedIn) {
            console.log('Not loggedin');

            return this.setState({ error: true });
          }

          const { location } = this.props;

          if (location.state && location.state.nextPathname) {
            this.props.router.replace(location.state.nextPathname);

            return;
          } else {
            this.props.router.replace('/home');

            return;
          }
        });
      }
        
    },


    render() {
      return (
        <div>
          <h1>JOIN THE ADVENTURE</h1>
          <form onSubmit={this.checkSignUpInfo}>
            <h4>Username</h4>
            <input type="text" ref='username' />
            <h4>Password</h4>
            <input type="password" ref='password' />
            <h4>Confirm Password</h4>
            <input type="password" ref='confirmPassword' />
            <input type="submit" />
          </form>
        </div>
      );
    }
  })
);

export default SignUp;
