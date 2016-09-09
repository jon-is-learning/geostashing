import React from 'react';
import { Link, withRouter } from 'react-router';

import auth from './../auth.js';

const SignIn = withRouter (
  React.createClass({
    getInitialState() {
      return {
        error: null,
        username: '',
        password: ''
      }
    },

    userNameInfoChange (e) {
      this.setState({
        username: e.target.value
      })
    },

    userPasswordChange (e) {
      this.setState({
        password: e.target.value
      })
    },

    checkLogin(e) {
      e.preventDefault();

      console.log(this.state.username);
      console.log(this.state.password);
    },


    render () {
      return (
        <div>
          <form onSubmit={this.checkLogin}>
            <h1>SIGN IN</h1>
            <h4>Username</h4>
            <input type="text" onChange={this.userNameInfoChange}/>
            <h4>Password</h4>
            <input type="password" onChange={this.userPasswordChange} />
            <input type="submit" />
          </form>
          <Link to="signup">Register</Link>
        </div>
      )

    }
  })

);

export default SignIn;



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