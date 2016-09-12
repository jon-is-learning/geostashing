import React from 'react';
import { withRouter } from 'react-router';
import UserCreationError from './ErrorMessages.jsx';
import $ from 'jquery';

const SignUp = withRouter(
  React.createClass({
    getInitialState() {
      return {
        error: false,
        username: '',
        password: '',
        confirmedPassword: '',
        creationError: false
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

    contextTypes: { router: React.PropTypes.object },

    handleSubmit() {
      console.log('YOU MADE IT INTO HANDLESUBMIT');
      const path = '/';

      this.context.router.push(path);
    },

    checkSignUpInfo(event) {
      event.preventDefault();
      $.ajax({
        method: 'POST',
        url: '/api/users',
        dataType: 'json',
        data: {
          username: this.refs.username.value,
          password: this.refs.password.value
        },
        success: () => {
          console.log('AJAX sent SUCCESS');
          this.handleSubmit();
        },
        error: (error) => {
          console.log('AJAX sent FAIL!!!', error);
          this.setState({ creationError: true });
          this.setState({ username: '' });
        }
      });
    },

    render() {
      return (
        <div>
          <h1>JOIN THE ADVENTURE</h1>
          <form onSubmit={this.checkSignUpInfo}>
            <h4>Username</h4>
            <input
            type="text"
            ref="username"
            onChange={this.userNameInfoChange} />
            <h4>Password</h4>
            <input
            type="password"
            ref="password"
            onChange={this.userPasswordChange} />
            <h4>Confirm Password</h4>
            <input type="password" onChange={this.confirmedPasswordChange} />
            <input type="submit" />
          </form>
          { this.state.creationError
            ? <UserCreationError />
            : null }
        </div>
      );
    }
  })
);

export default SignUp;
