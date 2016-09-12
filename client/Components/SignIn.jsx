import React from 'react';
import { Link, withRouter } from 'react-router';
import auth from './../auth.js';
import $ from 'jquery';

class SignIn extends React.Component {
  getInitialState() {
    return { error: false };
  }

  checkLoginInfo(event) {

    event.preventDefault();
    const username = this.refs.username.value;
    const password = this.refs.password.value;

    auth.login(username, password, (loggedIn) => {
      if (!loggedIn) {
        console.log('Not loggedin');

        return this.setState({ error: true });
      }

      const { location } = this.props;

      if (location.state && location.state.nextPathname) {
        return this.props.router.replace(location.state.nextPathname);
      }

      return this.props.router.replace('/home');
    });
  }

  // checkLoginInfo(event) {
  //   event.preventDefault();
  //   $.ajax({
  //     method: 'GET',
  //     url: '/api/users/',
  //     dataType: 'json',
  //     success: (data) => {
  //       console.log('DATA: ', data);
  //     },
  //     error: (error) => {
  //       console.log('ERROR: ', error);
  //     }
  //   });
  // }

  render() {
    return (
      <div>
        <h1>SIGN IN</h1>
        <form onSubmit={this.checkLoginInfo.bind(this)}>
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

SignIn.propTypes = {
  location: React.PropTypes.object,
  router: React.PropTypes.object
};

export default withRouter(SignIn);

// () =>
//     <div>
//       <h1>SIGN IN</h1>
//       <h4>Username</h4>
//       <input type="text" />
//       <h4>Password</h4>
//       <input type="password" />
//       <input type="submit" />
//       <Link to="signup">Register</Link>
//     </div>;

