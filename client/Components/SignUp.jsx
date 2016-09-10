import React from 'react';
import { withRouter } from 'react-router';

const SignUp = withRouter(
  React.createClass({
    getInitialState() {
      return {
        error: false,
        username: '',
        password: '',
        confirmedPassword: ''
      };
    },

    userNameInfoChange(event) {
      this.setState({ username: event.target.value });
    },

    userPasswordChange(event) {
      this.setState({ password: event.target.value });
    },

    confirmedPasswordChange(event) {
      this.setState({ confirmedPassword: event.target.value });
    },

    checkSignUpInfo(event) {
      event.preventDefault();

    },

    render() {
      return (
        <div>
          <h1>JOIN THE ADVENTURE</h1>
          <form onSubmit={this.checkSignUpInfo}>
            <h4>Username</h4>
            <input type="text" onChange={this.userNameInfoChange} />
            <h4>Password</h4>
            <input type="password" onChange={this.userPasswordChange} />
            <h4>Confirm Password</h4>
            <input type="password" onChange={this.confirmedPasswordChange} />
            <input type="submit" />
          </form>
        </div>
      );
    }
  })
);

export default SignUp;
